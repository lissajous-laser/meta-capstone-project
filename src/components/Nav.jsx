import logo from "../icons_assets/Logo.svg";
import "../styles/Nav.css";

export function Nav() {
  const clickHandler = (event) => event.preventDefault();

  return(
    <nav className="nav">
      <ul className="nav__list">
        <img className="nav__logo" src={logo} alt="logo"></img>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Home</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>About</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Menu</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Reservations</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Order Online</a></li>
        <li className="nav__textLink"><a href="/" onClick={clickHandler}>Login</a></li>
      </ul>
    </nav>
  );
}