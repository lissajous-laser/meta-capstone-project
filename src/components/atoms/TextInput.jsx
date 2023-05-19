import "../../styles/atoms/TextInput.css";

export function TextInput(props) {
  const {id, value, setValue, type} = props;
  const changeHandler = (event) => {
    setValue(event.target.value);
  }

  return (
    <input
      className={`textInput ${type === "number" ? "textInput--number" : ""}`}
      id={id}
      value={value}
      onChange={changeHandler}
      aria-required="true"
    />
  );
}