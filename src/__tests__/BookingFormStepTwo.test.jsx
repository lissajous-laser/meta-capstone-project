import { render, screen } from "@testing-library/react";
import { BookingFormStepTwo } from "../components/BookingFormStepTwo";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

const MockParent = (props) => {
  const {initName, initPhoneNumber, initOccasion} = props;
  const [name, setName] = useState(initName);
  const [phoneNumber, setPhoneNumber] = useState(initPhoneNumber);
  const [occasion, setOccasion] = useState(initOccasion);

  return (
    <BrowserRouter>
      <BookingFormStepTwo
        name={name}
        phoneNumber={phoneNumber}
        occasion={occasion}
        setName={setName}
        setPhoneNumber={setPhoneNumber}
        setOccasion={setOccasion}
        submitHandler={() => {}}
      />
    </BrowserRouter>
  );
}

describe("BookingFormStepTwo", () => {
  it("SHOULD produce name error message WHEN name input value is NOT valid", () => {
    render(
      <MockParent
        initName=""
        initPhoneNumber="9333 3333"
        initOccasion="birthday"
      />
    );

    const reserveButton = screen.getAllByRole("button")[1];
    act(() => reserveButton.click())

    const errorMsg = screen.getByText("enter a name with 1 - 30 characters", {exact: false});

    expect(errorMsg).toBeDefined();
  });

  it("SHOULD produce name error message WHEN phoneNumber input value is NOT valid", () => {
    render(
      <MockParent
        initName="Quentin"
        initPhoneNumber=""
        initOccasion="birthday"
      />
    );

    const reserveButton = screen.getAllByRole("button")[1];
    act(() => reserveButton.click())

    const errorMsg = screen.getByText("please enter a valid number", {exact: false});

    expect(errorMsg).toBeDefined();
  });

  it("SHOULD NOT produce any error message WHEN all inputs are valid", () => {
    render(
      <MockParent
        initName="Quentin"
        initPhoneNumber="9333 3333"
        initOccasion="birthday"
      />
    );

    const reserveButton = screen.getAllByRole("button")[1];
    act(() => reserveButton.click())

    expect(() => screen.getAllByText("enter a name with 1 - 30 characters", {exact: false})).toThrow();
    expect(() => screen.getAllByText("please enter a valid number", {exact: false})).toThrow();
  });
});