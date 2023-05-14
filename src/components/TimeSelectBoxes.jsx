import { timeSlots } from "../constants/constants";
import { TimeButton } from "./atoms/TimeButton";
import "../styles/TimeSelectBoxes.css";

export function TimeSelectBoxes(props) {
  const {id, options: availableTimes, value, setValue} = props;

  return (
    <div id={id} className="timeSelectBoxes" aria-required="true">
      {timeSlots.map((time) => (
        <TimeButton
          key={time}
          label={time}
          setValue={setValue}
          isSelected={time === value}
          isDisabled={availableTimes.find((member) => member === time)}
        />
      ))}
    </div>
  );
}