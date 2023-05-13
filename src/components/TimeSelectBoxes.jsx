import { timeSlots } from "../constants/constants";
import { TimeButton } from "./atoms/TimeButton";
import "../styles/TimeSelectBoxes.css";
import { Fragment } from "react";

export function TimeSelectBoxes(props) {
  const {id, options: timeVacancies, value, setValue} = props;

  return (
    <div id={id} className="timeSelectBoxes" aria-required="true">
      {timeSlots.map((time) => (
        <Fragment key={`${time}_fragment`}>
          <TimeButton
            key={time}
            label={time}
            setValue={setValue}
            isSelected={time === value}
            isDisabled={timeVacancies[time] === false}
          />
          {time === "1:30PM" ? <div key="axisBreak" className="timeSelectBoxes__axisBreak"/> : null}
        </Fragment>
      ))}
    </div>
  );
}