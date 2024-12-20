const Card = ({ date, time, message, username }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-full max-w-sm">
      <div className="text-sm text-gray-500">
        <span>
          {date}, {time}
        </span>
      </div>
      <div className="my-5">
        <p>{message}</p>
      </div>
      <div className="font-bold font-style: italic">— {username}</div>
    </div>
  );
};

export default Card;
