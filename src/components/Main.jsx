import { Story } from "./Story";
import { Confirmation } from "./Confirmation";
import { BookingFormStepOne } from "./BookingFormStepOne";
import { BookingFormStepTwo } from "./BookingFormStepTwo";
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import Testimonials from "./Testimonials";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { initialiseDays, initialiseTimes, getCurrentDay, initialiseBookingCalendar, availableTimesReducer, updateTimes } from "../functions/functions";
import { useReducer } from "react";

// function availableTimesReducer(state, action) {
//   switch (action.type) {
//       case "update": {
//       return state;
//     } default: {
//       return state;
//     }
//   }
// }

// function updateTimes() {
//   return {type: "update"}
// }

export function Main() {
  const [day, setDay] = useState(getCurrentDay());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occasion, setOccasion] = useState("");
  const days = initialiseDays();
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialiseTimes());

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
            />
          )}
        />
        <Route
          path="/booking-confirmation"
          element={(
            <Confirmation
              name={name}
              day={day}
              time={time}
            />
          )}
        />
      </Routes>
    </main>
  );
}