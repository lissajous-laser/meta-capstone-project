import { DayButton } from "./atoms/DayButton";
import "../styles/DaySelectBoxes.css";
import { isDatesEqual } from "../functions/functions";

export function DaySelectBoxes(props) {
  const {id, options: days, value, setValue} = props;

  return (
    <div id={id} className="daySelectBoxes" aria-required="true">
      {days.map((day) => (
        <DayButton
          key={day.dayOfWeek}
          label={day}
          setValue={setValue}
          isSelected={isDatesEqual(day, value)}
        />
      ))}
    </div>
  );
}