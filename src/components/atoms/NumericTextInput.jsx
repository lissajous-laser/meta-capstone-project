import { TextInput } from "./TextInput";
import "../../styles/atoms/NumericTextInput.css";

/** Tailer for guest numbers, max 2 digits */
export function NumericTextInput(props) {
  const { setValue } = props;

  const onChangeNumberChars = (value) => {
    if (/^\d{0,2}$/.test(value)) {
      setValue(value);
    }
  }

  const decrementNumber = (event) => {
    event.preventDefault();
    setValue((prevState) => {
      let newValue;

      if (prevState === "") {
        newValue = 1;
      } else {
        newValue = parseInt(prevState) - 1;
      }

      if (newValue < 1) {
        newValue = 1;
      }

      return newValue.toString();
    });
  }

  const incrementNumber = (event) => {
    event.preventDefault()
    setValue((prevState) => {
      let newValue;

      if (prevState === "") {
        newValue = 1;
      } else {
        newValue = parseInt(prevState) + 1;
      }

      return newValue.toString()
    })
  }


  return (
    <div className="numericTextInput">
      <button
        className="numericTextInput__button numericTextInput__button--left"
        onClick={decrementNumber}
      >
        −
      </button>
      <TextInput {... {...props, setValue: onChangeNumberChars}} type="number" className="yeah"/>
      <button
        className="numericTextInput__button numericTextInput__button--right"
        onClick={incrementNumber}
      >
        +
      </button>
    </div>
  )
}