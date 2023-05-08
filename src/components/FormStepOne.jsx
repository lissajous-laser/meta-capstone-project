import { useState } from "react";
import { generateBookingCalendar, isDatesEqual } from "../functions/functions";
import "../styles/FormStepOne.css";
import { DaySelectBoxes } from "./DaySelectBoxes";
import { LabelledInput } from "./LabelledInput";
import { TimeSelectBoxes } from "./TimeSelectBoxes";

export function FormStepOne(props) {
  const { day, time, guests, setDay, setTime, setGuests } = props;
  const [bookingCalendar] = useState(generateBookingCalendar());

  return (
    <form className="formStepOne">
      <div className="formStepOne__container">
        <LabelledInput
          label="Day"
          inputComponent={DaySelectBoxes}
          id="day"
          options={bookingCalendar}
          value={day}
          setValue={setDay}
        />
        <LabelledInput
          label="Time"
          inputComponent={TimeSelectBoxes}
          id="time"
          options={bookingCalendar.filter((bookingDay) => isDatesEqual(bookingDay.date, day))[0].times}
          value={time}
          setValue={setTime}
        />
      </div>
    </form>
  );
}
