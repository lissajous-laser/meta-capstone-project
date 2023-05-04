import { pages } from "../constants/constants";
import "../styles/Header.css";
import { FormProgress } from "./FormProgress";

export function Header(props) {
  const {page} = props;

  return (
    <>
    {page === pages.reserveTable1
    ? (
      <header className="header">
        <div className="header__content">
          <h1 className="header__heading">Reserve a Table</h1>
          <FormProgress/>
        </div>
      </header>
    )
    : null
    }
    </>
  );
}