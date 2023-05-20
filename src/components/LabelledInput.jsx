import { createElement } from "react";
import "../styles/LabelledInput.css";

export function LabelledInput(props) {
  const { label, inputComponent, id, options, value, setValue, errorMsg} = props;

  return (
    <div className="labelledInput">
      <div className="labelledInput__inputInfo">
        <label className={`labelledInput__label ${errorMsg && "labelledInput__label--error"}`} htmlFor={id}>{label}</label>
        <p className="labelledInput__errorMsg">{errorMsg && "- " + errorMsg}</p>
      </div>
      {createElement(inputComponent, {id, options, value, setValue})}
    </div>
  );
};