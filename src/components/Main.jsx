import { Story } from "./Story";
import { Confirmation } from "./Confirmation";
import { FormStepOne } from "./FormStepOne";
import { FormStepTwo } from "./FormStepTwo";
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import Testimonials from "./Testimonials";
import { pages } from "../constants/constants";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { getCurrentDay } from "../functions/functions";



export function Main(props) {
  const [day, setDay] = useState(getCurrentDay());
  const [time, setTime] = useState("");

  return (
    <main>
      <Routes>
        <Route
          path ="/"
          element={(
            <>
              <Hero>
              </Hero>
              <Specials>

              </Specials>
              <Testimonials>

              </Testimonials>
              <Story>

              </Story>
            </>
          )}
        />
        <Route
          path="/booking-step1"
          element={<FormStepOne day={day} time={time} setDay={setDay} setTime={setTime}/>}
        />
        <Route
          path="/booking-step2"
          element={<FormStepTwo/>}
        />
        <Route
          path="/booking-confirmation"
          element={<Confirmation/>}
        />
      </Routes>
    </main>
  );
}