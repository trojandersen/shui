const Card = ({ date, time, message, username }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 w-full max-w-md">
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className="text-base mb-4">
        <p>{message}</p>
      </div>
      <div className="text-right text-sm text-gray-400">
        {username && <span>— {username}</span>}
      </div>
    </div>
  );
};

export default Card;
