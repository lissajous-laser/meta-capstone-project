import "../../styles/atoms/TimeButton.css";

export function TimeButton(props) {
  const {label, setValue, isSelected, isDisabled} = props;
  const clickHandler = (event) => {
    event.preventDefault();
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