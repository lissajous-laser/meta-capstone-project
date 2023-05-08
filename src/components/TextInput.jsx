export function TextInput(props) {
  const {id, value, setValue} = props;

  return (
    <input id={id} value={value} onChange={setValue} />
  );
}