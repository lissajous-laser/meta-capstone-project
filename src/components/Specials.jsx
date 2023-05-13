import "../styles/Specials.css";
import { Button } from "./atoms/Button";
import { DishCard } from "./DishCard";
import greekSaladPicture from "../icons_assets/greek-salad-small.jpg";
import bruschettaPicture from "../icons_assets/bruschetta-small.jpg";
import lemonSlicePicture from "../icons_assets/lemon-slice-small.jpg";

export function Specials() {
  return (
    <section className="specials">
      <div className="specials__container">
        <div className="specials__top">
          <h2 className="specials__heading">This weeks specials</h2>
          <Button className="specials__menu">Online Menu</Button>
        </div>
        <div className="specials__cards">
          <DishCard
            name="Greek Salad"
            price="$12.99"
            picture={greekSaladPicture}
            description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          <DishCard
            name="Bruschetta"
            price="$5.99"
            picture={bruschettaPicture}
            description="Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          />
          <DishCard
            name="Lemon Dessert"
            price="$5.00"
            picture={lemonSlicePicture}
            description="The comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          />
        </div>
      </div>
    </section>
  );
}