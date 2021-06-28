import "./styles.css";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <h2>Builders Weather</h2>
    </div>
  );
}

export default Header;
