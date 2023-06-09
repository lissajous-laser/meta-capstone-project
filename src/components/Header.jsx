import { Route, Routes } from "react-router";
import { pages } from "../constants/constants";
import "../styles/Header.css";
import { FormProgress } from "./FormProgress";

export function Header(props) {
  const {page} = props;

  return (
    <Routes>
      <Route
        path="/"
        element={null}
      />
      <Route
        path="/booking-step1"
        element={(
          <header className="header">
            <div className="header__content">
              <h1 className="header__heading">Reserve a Table</h1>
              <FormProgress step={1} aria-label="reservation form step one of two"/>
            </div>
          </header>
        )}
      />
      <Route
        path="/booking-step2"
        element={(
          <header className="header">
            <div className="header__content">
              <h1 className="header__heading">Reserve a Table</h1>
              <FormProgress step={2} aria-label="reservation form step two of two"/>
            </div>
          </header>
        )}
      />
      <Route
        path="/booking-confirmation"
        element={(
          <header className="header">
            <div className="header__content">
              <h1 className="header__heading">Reserve a Table</h1>
              <FormProgress step={2}/>
            </div>
          </header>
        )}
      />
    </Routes>
  );
}