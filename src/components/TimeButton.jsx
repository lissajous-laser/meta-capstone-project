import "../styles/TimeButton.css";

export function TimeButton(props) {
  const {label, setValue, isSelected, isDisabled} = props;
  const clickHandler = (event) => {
    event.preventDefault();
    console.log(label);
    console.log(isDisabled);
    setValue(label);
  }

  return (
    <button
      onClick={clickHandler}
      className={`timeSelectBoxes__button ${isSelected ? "timeSelectBoxes__button--selected" : ""}`}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}