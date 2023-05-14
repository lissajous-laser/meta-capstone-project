import "../../styles/atoms/TextInput.css";

export function TextInput(props) {
  const {id, value, setValue} = props;
  const changeHandler = (event) => {
    setValue(event.target.value);
  }

  return (
    <input
      className="textInput"
      id={id}
      value={value}
      onChange={changeHandler}
      aria-required="true"
    />
  );
}