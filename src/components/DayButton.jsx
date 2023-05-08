import "../styles/DayButton.css";

export function DayButton(props) {
  const { label: {dayOfWeek, dayOfMonth, month}, setValue, isSelected} = props;
  const clickHandler = (event) => {
    event.preventDefault();
    setValue({ dayOfWeek, dayOfMonth, month });
  }

  return(
    <button className={`daySelectBoxes__button ${isSelected ? "daySelectBoxes__button--selected" : ""}`} onClick={clickHandler}>
      <span className="daySelectBoxes__dayOfWeek">
        {dayOfWeek}
      </span>
      <span className="daySelectBoxes__dayOfMonth">
        {dayOfMonth}
      </span>
      <span className="daySelectBoxes__month">
        {month}
      </span>
    </button>
  );
}