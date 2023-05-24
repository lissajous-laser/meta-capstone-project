import '../styles/Footer.css';
import iconCall from "../icons_assets/call.svg";
import iconEnvelope from "../icons_assets/envelope.svg";
import iconPointer from "../icons_assets/pointer.svg";

export function Footer() {
  const clickHandler = (event) => event.preventDefault();

  return (
    <footer className="footer">
      <div className="footer__content">
        
        <div/>
        <section className="footer__column">
          <h3 className="footer__heading">Navigation</h3>
          <ul className="footer__list">
            <li><a className="footer__link" onClick={clickHandler} href="/">Home</a></li>
            <li><a className="footer__link" onClick={clickHandler} href="/about">About</a></li>
            <li><a className="footer__link" onClick={clickHandler} href="/menu">Menu</a></li>
            <li><a className="footer__link" onClick={clickHandler} href="/booking-step1">Reservations</a></li>
            <li><a className="footer__link" onClick={clickHandler} href="/order">Order Online</a></li>
            <li><a className="footer__link" onClick={clickHandler} href="/login">Login</a></li>
          </ul>

        </section>
        <section className="footer__column">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__list">
            <li>
              <img className="footer__icon" src={iconPointer} alt="pointer"/>
              10 High Street,<br/> Chicago, IL 60605
            </li>
            <li>
              <img className="footer__icon" src={iconCall} alt="phone"/>
              312-999-9999
            </li>
            <li>
              <img className="footer__icon" src={iconEnvelope} alt="envelope"/>
              <a className="footer__link" href="mailto:info@littlelemon.com">info@littlelemon.com</a>
            </li>
          </ul>
        </section>
        <section className="footer__column">
          <h3 className="footer__heading">Social Media</h3>
          <ul className="footer__list">
            <li><a className="footer__link" href="https://www.instagram.com">Instagram</a></li>
            <li><a className="footer__link" href="https://twitter.com">Twitter</a></li>
            <li><a className="footer__link" href="https://www.facebook.com">Facebook</a></li>
          </ul>
        </section>

      </div>
    </footer>
  );
}