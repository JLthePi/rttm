import { Link } from "react-router-dom";

const Header = () => {
return (
  <div className="header flex">
    <div className="logo"><span className="color1">R</span>tt<span className="color2">M</span></div>
    <Link to="/">
      <div>Home</div>
      <i className="fas fa-user"></i>
    </Link>
    <Link to="/about">
    <div>About</div>
    </Link>
    <Link to="/contact">
    <div>Contact</div>
    </Link>
  </div>
)
}

export default Header;

