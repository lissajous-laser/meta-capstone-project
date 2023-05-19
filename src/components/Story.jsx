import "../styles/Story.css";
import imgMarioAndAdrian from "../icons_assets/mario-and-adrian.jpg";
import imgMario from "../icons_assets/mario.jpg";

export function Story() {
  return (
    <section className="story">
      <div className="story__content">
        <div className="story__columns">
          <div className="story__leftColumn">
            <h2 className="story__heading">Little Lemon</h2>
            <p className="story__text">
              Chef Mario and and his brother friend Adrian always dreamed of moving to America to open a restaurant.
              This they did in 2014 when they finally set up Little Lemon in downtown Chicago.
              Mario and Adrian bring their love of Italian and Mediterranean food to everyone's taste buds using the highest quality ingredients.
            </p>
          </div>
          <div className="story__rightColumn">
            <img className="story__image story__imageLeft" src={imgMario} alt="Mario"/>
            <img
              className="story__image story__imageRight" src={imgMarioAndAdrian}
              alt="Mario and Adrian"
            />
          </div>
        </div>
      </div>
    </section>
  );
}