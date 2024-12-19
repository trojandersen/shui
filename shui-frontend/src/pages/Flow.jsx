import { useState, useEffect } from "react";
import Card from "../components/Card";

const Flow = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://2obyqqog5c.execute-api.eu-north-1.amazonaws.com/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        const data = result.data;
        const formattedData = data.map((item) => ({
          date: new Date(item.createdAt).toLocaleDateString(), // Format date
          time: new Date(item.createdAt).toLocaleTimeString(), // Format time
          message: item.text,
          username: item.username,
        }));
        setCardsData(formattedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-8 gap-4">
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
