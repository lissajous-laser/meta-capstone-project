import logo from "../icons_assets/Logo.svg";
import burgerIcon from "../icons_assets/icon_hamburger menu.svg"
import "../styles/Nav.css";

export function Nav() {
  const clickHandler = (event) => event.preventDefault();

  return(
    <nav className="nav">
      <button className="nav__burgerIcon"><img src={burgerIcon} alt="burger icon"/></button>
      <ul className="nav__list">
        <img className="nav__logo" src={logo} alt="logo"></img>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Home</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>About</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Menu</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Reservations</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Order Online</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Login</a></li>
      </ul>
      <img className="nav__logo nav__logo--mobile" src={logo} alt="logo"></img>
    </nav>
  );
}