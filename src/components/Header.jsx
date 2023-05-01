import "../styles/Header.css";
import { FormProgress } from "./FormProgress";

export function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__heading">Reserve a Table</h1>
        <FormProgress/>
      </div>
    </header>
  );
}