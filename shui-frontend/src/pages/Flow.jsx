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
      const formattedData = data.map((item) => ({
        date: new Date(item.createdAt).toLocaleDateString("sv-SE", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }),
        time: new Date(item.createdAt).toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
        }),
        message: item.text,
        username: item.username,
      }));
      setCardsData(formattedData);
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          date={card.date}
          time={card.time}
          message={card.message}
          username={card.username}
        />
      ))}
    </div>
  );
};

export default Flow;
