import "../styles/Hero.css";
import trayPhoto from "../icons_assets/restaurantfood-small.jpg"
import { ButtonLink } from "./atoms/ButtonLink";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__textColumn">
          <h1 className="hero__title">Little Lemon</h1>
          <p className="hero__subTitle"><strong>Chicago</strong></p>
          <p className="hero__text">
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <ButtonLink to="/booking-step1" className="hero__button">
            Reserve a Table
          </ButtonLink>
        </div>
        <img
          className="hero__image"
          src={trayPhoto}
          alt="tray of open face bread rolls with toppings"
        />
      </div>
    </section>
  );
}