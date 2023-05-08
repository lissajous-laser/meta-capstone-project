import { timeSlots } from "../constants/constants";
import { TimeButton } from "./TimeButton";
import "../styles/TimeSelectBoxes.css";

export function TimeSelectBoxes(props) {
  const {id, options: timeVacancies, value, setValue} = props;

  console.log(timeSlots);

  return (
    <div id={id }className="timeSelectBoxes">
      {timeSlots.map((time) => (
        <>
          <TimeButton
            key={time}
            label={time}
            setValue={setValue}
            isSelected={time === value}
            isDisabled={timeVacancies[time] === false}
          />
          {time === "1:30PM" ? <div key="axisBreak" className="timeSelectBoxes__axisBreak"/> : null}
        </>
      ))}
    </div>
  );
}