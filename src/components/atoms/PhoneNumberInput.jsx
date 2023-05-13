import { TextInput } from "./TextInput";

export function PhoneNumberInput(props) {
  const { setValue } = props;

  const onChangeNumberChars = (value) => {
    if (/^\+?\(?\d{0,2}\)? ?[0-9 ]{0,12}$/.test(value)) {
      setValue(value);
    }
  }

  return (
    <TextInput {... {...props, setValue: onChangeNumberChars}}/>
  )
}