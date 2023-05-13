import { createElement } from "react";
import "../styles/LabelledInput.css";

export function LabelledInput(props) {
  const { label, inputComponent, type, id, options, value, setValue} = props;

  return (
    <div className="labelledInput">
      <label className="labelledInput__label" htmlFor={id}>{label}</label>
      {createElement(inputComponent, {id, options, value, setValue})}
    </div>
  );
};