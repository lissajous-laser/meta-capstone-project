import { useState } from "react";
import { isDatesEqual } from "../functions/functions";
import "../styles/Form.css";
import { ButtonLink } from "./atoms/ButtonLink";
import { NumericTextInput } from "./atoms/NumericTextInput";
import { DaySelectBoxes } from "./DaySelectBoxes";
import { LabelledInput } from "./LabelledInput";
import { TimeSelectBoxes } from "./TimeSelectBoxes";

export function BookingFormStepOne(props) {
  const { day, time, guests, setDay, setTime, setGuests, days, availableTimes, updateTimes, dispatch } = props;

  const changeDay = (day) => {
    setDay(day);
    setTime(""); // unselect time
    dispatch(updateTimes)
  }

  return (
    <form>
      <div className="form__container">
        <LabelledInput
          label="Day"
          inputComponent={DaySelectBoxes}
          id="day"
          options={days}
          value={day}
          setValue={changeDay}
        />
        <LabelledInput
          label="Time"
          inputComponent={TimeSelectBoxes}
          id="time"
          options={availableTimes}
          value={time}
          setValue={setTime}
        />
        <LabelledInput
          label="Guests"
          inputComponent={NumericTextInput}
          id="guests"
          value={guests}
          setValue={setGuests}
        />
        <div className="form__buttonGroup">
          <ButtonLink to="/" className="form__prevButton">Cancel</ButtonLink>
          <ButtonLink to="/booking-step2" className="form__nextButton">Next</ButtonLink>
        </div>
      </div>
    </form>
  );
}
