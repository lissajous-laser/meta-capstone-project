import "../styles/ConfirmedBooking.css";
import { ButtonLink } from "./atoms/ButtonLink";
import outdoorArea from "../icons_assets/restaurant-small.jpg";

export function ConfirmedBooking(props) {
  const {name, day, time} = props;
  return (
    <section>
      <div className="confirmation__content">
        <div className="confirmation__leftColumn">
          <h2 className="confirmation__heading">Thank you {name}</h2>
          <p className="confirmation__text">
            We have received your reservation for
            <br/>
            {day.dayOfWeek} {day.dayOfMonth} {day.month} at {time}.
            <br/>
            We look forward to seeing you!
          </p>
          <ButtonLink to="/" className="confirmation__button">Home</ButtonLink>
        </div>
        <img className="confirmation__picture" src={outdoorArea} alt="outdoor area"/>
      </div>
    </section>
  );
}