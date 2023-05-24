import { Story } from "./Story";
import { ConfirmedBooking } from "./ConfirmedBooking";
import { BookingFormStepOne } from "./BookingFormStepOne";
import { BookingFormStepTwo } from "./BookingFormStepTwo";
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import Testimonials from "./Testimonials";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  initialiseDays,
  initialiseTimes,
  availableTimesReducer,
  updateTimes,
  submitAPI,
  setTimesToLocalStorage
} from "../functions/functions";
import { useReducer } from "react";

export function Main() {
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occasion, setOccasion] = useState("");
  const days = initialiseDays();
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer, initialiseTimes()
  );
  const navigate = useNavigate();
  const [confirmationString, setConfirmationString] = useState("");

  const resetForm = () => {
    setDay(new Date());
    setTime("");
    setGuests("2");
    setName("");
    setPhoneNumber("");
    setOccasion("");
  }

  const submitHandler = () => {
    const response = submitAPI({day, time, guests, name, phoneNumber, occasion});
    if (response) {
      const [dayOfWeek, month, dayOfMonth] = day.toString().split(" ");
      setConfirmationString(`${dayOfWeek} ${dayOfMonth} ${month} at ${time}`);

      resetForm();
      navigate("/booking-confirmation");
    }
  }


  // const [seededRandom, setSeededRandom] = useState(() => {});
  // const [fetchAPI, setFetchAPI] = useState(() => {});
  // const [submitAPI, setSubmitAPI] = useState(() => {});

  // useEffect(() => {
  //   const apiEndpoint = "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";
  //   fetch(apiEndpoint)
  //     .then((response) => response.text())
  //     .then((text) => {
  //       const functionsWithoutArrowsAsStr = text.split(/const[^(]+/).slice(1);
  //       const arrowFunctionsAsStr = functionsWithoutArrowsAsStr.map((funcAsStr) => funcAsStr.replace(") {", ") => {"));
  //       setSeededRandom(eval(arrowFunctionsAsStr[0]));
  //       setFetchAPI(eval(arrowFunctionsAsStr[1]));
  //       setSubmitAPI(eval(arrowFunctionsAsStr[2]));
  //     });
  // }, []);

  useEffect(() => {
    setTimesToLocalStorage(day, availableTimes);
  // eslint-disable-next-line
  }, [day, availableTimes]);

  return (
    <main>
      <Routes>
        <Route
          path ="/"
          element={(
            <>
              <Hero/>
              <Specials/>
              <Testimonials/>
              <Story/>
            </>
          )}
        />
        <Route
          path="/booking-step1"
          element={(
            <BookingFormStepOne
              day={day}
              time={time}
              guests={guests}
              setDay={setDay}
              setTime={setTime}
              setGuests={setGuests}
              days={days}
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              dispatch={dispatch}
            />
          )}
        />
        <Route
          path="/booking-step2"
          element={(
            <BookingFormStepTwo
              name={name}
              phoneNumber={phoneNumber}
              occasion={occasion}
              setName={setName}
              setPhoneNumber={setPhoneNumber}
              setOccasion={setOccasion}
              submitHandler={submitHandler}
            />
          )}
        />
        <Route
          path="/booking-confirmation"
          element={(
            <ConfirmedBooking
              confirmationString={confirmationString}
            />
          )}
        />
      </Routes>
    </main>
  );
}
