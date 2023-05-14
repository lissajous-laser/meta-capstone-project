import "../../styles/atoms/DayButton.css";

export function DayButton(props) {
  const { label: day, setValue, isSelected} = props;
  const clickHandler = (event) => {
    event.preventDefault();
    setValue(day);
  }

  const [dayOfWeek, month, dayOfMonth] = day.toString().split(" ");

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