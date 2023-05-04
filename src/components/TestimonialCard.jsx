import "../styles/TestimonialCard.css";
import fiveStars from "../icons_assets/five-stars.svg";

export function TestimonialCard(props) {
  const {name, portrait, text} = props;
  return (
    <article className="testimonialCard">
      <img className="testimonialCard__fiveStars" src={fiveStars} alt="five stars"/>
      <div className="testimonialCard__columns">
        <img className="testimonialCard__portrait" src={portrait} alt="portrait"/>
        <h3 className="testimonialCard__title">{name}</h3>
      </div>
      <p className="testimonialCard__text">{text}</p>
    </article>
  );
}