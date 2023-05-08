import "../styles/LabelledInput.css";

export function LabelledInput(props) {
  const { label, inputComponent, id, options, value, setValue} = props;

  return (
    <>
      <label className="labelledInput__label" htmlFor={id}>{label}</label>
      {inputComponent({id, options, value, setValue})}
    </>
  );
};