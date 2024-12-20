import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="fixed top-0 left-10 z-10">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
