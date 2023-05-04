import "../styles/DishCard.css"

export function DishCard(props) {
  const {name, picture, price, description} = props
  
  return (
    <article className="dishCard">
      <img className="dishCard__picture" src={picture} alt="greek salad"/>
      <div className="dishCard__details">
        <h3 className="dishCard__title">{name}</h3>
        <div className="dishCard__price">{price}</div>
      </div>
      <p className="dishCard__description">{description}</p>
      <p className="dishCard__callToAction">Order a Delivery</p>
    </article>
  );
}