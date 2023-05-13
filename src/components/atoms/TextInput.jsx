import "../../styles/atoms/TextInput.css";

export function TextInput(props) {
  const {id, value, setValue} = props;
  const onClick = (event) => {
    setValue(event.target.value);
  }

  return (
    <input
      className="textInput"
      id={id}
      value={value}
      onChange={onClick}
      aria-required="true"
    />
  );
}