import { Link } from "react-router-dom";

const Card = ({ date, time, message, username, msgId }) => {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md gap-5 p-6 w-full max-w-md">
      <span className="flex justify-between">
        <p className="text-sm text-gray-500">
          {date}, {time}
        </p>
        <Link to={`/edit/${msgId}`} className=" top-2 right-2">
          <button className="text-sm text-blue-500 hover:text-blue-700">
            Edit
          </button>
        </Link>
      </span>

      <p>{message}</p>
      <p className="font-bold font-style: italic">— {username}</p>
    </div>
  );
};

export default Card;
