import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Write() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      "https://2obyqqog5c.execute-api.eu-north-1.amazonaws.com/write";

    const payload = {
      text: message,
      username,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("");
        setUsername("");
        navigate("/");
      } else {
        alert("Failed to publish message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <form
        className="bg-white rounded-md shadow-md p-6 mb-4 max-w-md"
        onSubmit={handleSubmit}
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Skriv ditt meddelande här"
          className="w-full h-40 border border-gray-300 rounded-md shadow-md p-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        ></textarea>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ditt Användarnamn"
          className="w-full border border-gray-300 rounded-md shadow-md p-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full border border-gray-300 bg-red-500 text-white  rounded-md shadow-md py-4 mb-4  font-bold hover:bg-red-600"
        >
          Publicera
        </button>
      </form>
    </div>
  );
}

export default Write;
