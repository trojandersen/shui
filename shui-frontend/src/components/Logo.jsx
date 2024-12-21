import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="fixed top-0 left-10 z-10">
      <Link to="/" className="inline-block">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
