import { TextInput } from "./TextInput";

export function NumericTextInput(props) {
  const { setValue } = props;

  const onChangeNumberChars = (value) => {
    if (/^\d{0,2}$/.test(value)) {
      setValue(value);
    }
  }

  return (
    <TextInput {... {...props, setValue: onChangeNumberChars}}/>
  )
}