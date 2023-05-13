import { useLinkClickHandler } from "react-router-dom";
import "../../styles/atoms/Button.css";
import { Button } from "./Button";

/** Similar to react-router Link but is a button */
export function ButtonLink(props) {
  const { to, className, children } = props;

  let internalOnClick = useLinkClickHandler(to, {});

  const clickHandler = (event) => {
    internalOnClick(event);
  };

  return (
    <Button className={className} onClick={clickHandler}>{children}</Button>
  )
}