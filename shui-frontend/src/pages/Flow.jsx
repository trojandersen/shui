import { useState, useEffect } from "react";
import Card from "../components/Card";

const Flow = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(
        "https://2obyqqog5c.execute-api.eu-north-1.amazonaws.com/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      const data = result.data;

      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      const formattedData = sortedData.map((item) => {
        const createdAt = new Date(item.createdAt);
        const gmtPlusOne = new Date(createdAt.getTime() + 60 * 60 * 1000);

        return {
          msgId: item.msgId,
          date: gmtPlusOne.toLocaleDateString("sv-SE", {
            weekday: "long",
            month: "long",
            day: "numeric",
          }),
          time: gmtPlusOne.toLocaleTimeString([], {
            hour: "numeric",
            minute: "numeric",
          }),
          message: item.text,
          username: item.username,
        };
      });
      setCardsData(formattedData);
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {cardsData.map((card) => (
        <Card
          key={card.msgId}
          date={card.date}
          time={card.time}
          message={card.message}
          username={card.username}
          msgId={card.msgId}
        />
      ))}
    </div>
  );
};

export default Flow;
