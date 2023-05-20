import { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/Form.css";
import { Button } from "./atoms/Button";
import { ButtonLink } from "./atoms/ButtonLink";
import { NumericTextInput } from "./atoms/NumericTextInput";
import { DaySelectBoxes } from "./DaySelectBoxes";
import { LabelledInput } from "./LabelledInput";
import { TimeSelectBoxes } from "./TimeSelectBoxes";

export function BookingFormStepOne(props) {
  const {
    day,
    time,
    guests,
    setDay,
    setTime,
    setGuests,
    days,
    availableTimes,
    updateTimes,
    dispatch
  } = props;

  const [timeErrorMsg, setTimeErrorMsg] = useState("");
  const [guestsErrorMsg, setGuestsErrorMsg] = useState("");
  const navigate = useNavigate();

  const changeDay = (day) => {
    setDay(day);
    setTime(""); // unselect time
    dispatch(updateTimes(day))
  }

  const nextClickHandler = (event) => {
    event.preventDefault();
    let noErrors = true;

    if (time.length === 0) {
      setTimeErrorMsg("please select a time");
      noErrors = false;
    } else {
      setTimeErrorMsg("");
    }

    if (parseInt(guests) < 1 || parseInt(guests) > 12) {
      setGuestsErrorMsg("we take bookings of 1 - 12 guests");
      noErrors = false;
    } else if (guests.length === "") {
      setGuestsErrorMsg("please enter the number of guests");
      noErrors = false;
    } else {
      setGuestsErrorMsg("");
    }

    if (noErrors) {
      navigate("/booking-step2");
    }
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
          errorMsg={timeErrorMsg}
        />
        <LabelledInput
          label="Guests"
          inputComponent={NumericTextInput}
          id="guests"
          value={guests}
          setValue={setGuests}
          errorMsg={guestsErrorMsg}
        />
        <div className="form__buttonGroup">
          <ButtonLink to="/" className="form__prevButton">Cancel</ButtonLink>
          {/* <ButtonLink to="/booking-step2" className="form__nextButton"> */}
          <Button onClick={nextClickHandler} className="form__nextButton">
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
