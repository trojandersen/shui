import writeIcon from "../assets/write.svg";
import { Link } from "react-router-dom";

const WriteButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-10">
      <Link to="/write">
        <img src={writeIcon} alt="Write" />
      </Link>
    </div>
  );
};

export default WriteButton;
