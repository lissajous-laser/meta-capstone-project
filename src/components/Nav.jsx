import logo from "../icons_assets/Logo.svg";
import "../styles/Nav.css";

export function Nav() {
  return(
    <nav className="nav">
      <ul className="nav__list">
        <img className="nav__logo" src={logo} alt="logo"></img>
        <li className="nav__textLink"><a href="/">Home</a></li>
        <li className="nav__textLink"><a href="/">About</a></li>
        <li className="nav__textLink"><a href="/">Menu</a></li>
        <li className="nav__textLink"><a href="/">Reservations</a></li>
        <li className="nav__textLink"><a href="/">Order Online</a></li>
        <li className="nav__textLink"><a href="/">Login</a></li>
      </ul>
    </nav>
  );
}