import { DayButton } from "./DayButton";
import "../styles/DaySelectBoxes.css";
import { isDatesEqual } from "../functions/functions";

export function DaySelectBoxes(props) {
  const {id, options: bookingCalendar, value, setValue} = props;

  return (
    <div id={id} className="daySelectBoxes">
      {bookingCalendar.map((bookingDay) => (
        <DayButton
          key={bookingDay.date.dayOfWeek}
          label={bookingDay.date}
          setValue={setValue}
          isSelected={isDatesEqual(bookingDay.date, value)}
        />
      ))}
    </div>
  );
}