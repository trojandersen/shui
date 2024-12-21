import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { msgId } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(
        `https://2obyqqog5c.execute-api.eu-north-1.amazonaws.com/edit/${msgId}`
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.data.text);
      } else {
        alert("Failed to fetch the message");
      }
    };

    fetchMessage();
  }, [msgId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = `https://2obyqqog5c.execute-api.eu-north-1.amazonaws.com/edit/${msgId}`;

    const payload = {
      text: message,
    };

    try {
      const response = await fetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigate("/");
      } else {
        alert("Failed to update message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Edit Message</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
