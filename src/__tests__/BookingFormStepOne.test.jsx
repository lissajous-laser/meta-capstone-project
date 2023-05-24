import { prettyDOM, render, screen } from "@testing-library/react";
import { BookingFormStepOne } from "../components/BookingFormStepOne";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { availableTimesReducer, initialiseDays, initialiseTimes, updateTimes } from "../functions/functions";
import { useReducer } from "react";

const MockParent = (props) => {
  const {initDay, initTime, initGuests} = props;
  const [day, setDay] = useState(initDay);
  const [time, setTime] = useState(initTime);
  const [guests, setGuests] = useState(initGuests);
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer, initialiseTimes()
  );

  return (
    <BrowserRouter>
      <BookingFormStepOne
        day={day}
        time={time}
        guests={guests}
        setDay={setDay}
        setTime={setTime}
        setGuests={setGuests}
        days={initialiseDays()}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        dispatch={dispatch}
      />
    </BrowserRouter>
  );
}

describe("BookingFormStepOne", () => {
  it("SHOULD produce time error message WHEN time input value is not valid", () => {
    render(
      <MockParent
        initDay={new Date()}
        initTime=""
        initGuests="2"
      />
    );

    const nextButton = screen.getByText("Next");
    act(() => nextButton.click());

    const errorMsg = screen.getByText("please select a time", {exact: false});
    expect(errorMsg).toBeDefined();
  });

  it("SHOULD produce guest error message WHEN guest input value is not valid", () => {
    render(
      <MockParent
        initDay={new Date()}
        initTime="17:30"
        initGuests=""
      />
    );

    const nextButton = screen.getByText("Next");
    act(() => nextButton.click());

    const errorMsg = screen.getByText("please enter the number of guests", {exact: false});
    expect(errorMsg).toBeDefined();
  });

  it("SHOULD NOT produce any error message WHEN all inputs are valid", () => {
    render(
      <MockParent
        initDay={new Date()}
        initTime="17:30"
        initGuests="2"
      />
    );

    const nextButton = screen.getByText("Next");
    act(() => nextButton.click());

    expect(() => screen.getAllByText("please select a time", {exact: false})).toThrow();
    expect(() => screen.getAllByText("please enter the number of guests", {exact: false})).toThrow();
  });
});