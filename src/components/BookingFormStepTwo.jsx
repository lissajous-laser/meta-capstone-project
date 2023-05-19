import { useNavigate } from "react-router";
import { submitAPI } from "../functions/functions";
import "../styles/Form.css";
import { Button } from "./atoms/Button";
import { ButtonLink } from "./atoms/ButtonLink";
import { OccasionSelect } from "./atoms/OccasionSelect";
import { PhoneNumberInput } from "./atoms/PhoneNumberInput";
import { TextInput } from "./atoms/TextInput";
import { LabelledInput } from "./LabelledInput";

export function BookingFormStepTwo(props) {
  const {
    name,
    phoneNumber,
    occasion,
    setName,
    setPhoneNumber,
    setOccasion,
    submitHandler
  } = props;

  const options = [
    {value: "", label: "None"},
    {value: "birthday", label: "Birthday"},
    {value: "anniversary", label: "Anniversary"}
  ];

  return (
    <form>
      <div className="form__container">
        <LabelledInput
          label="Name"
          inputComponent={TextInput}
          id="name"
          value={name}
          setValue={setName}
        />
        <LabelledInput
          label="Contact number"
          inputComponent={PhoneNumberInput}
          id="phoneNumber"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
        <LabelledInput
          label="Occasion"
          inputComponent={OccasionSelect}
          id="occasion"
          options={options}
          value={occasion}
          setValue={setOccasion}
        />
        <div className="form__buttonGroup">
          <ButtonLink to="/booking-step1" className="form__prevButton">Back</ButtonLink>
          <Button onClick={submitHandler} className="form__nextButton">Reserve</Button>
        </div>
      </div>
    </form>
  );
}