import { Story } from "./Story";
import { Confirmation } from "./Confirmation";
import { FormStepOne } from "./FormStepOne";
import { FormStepTwo } from "./FormStepTwo";
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import Testimonials from "./Testimonials";
import { pages } from "../constants/constants";



export function Main(props) {
  const {page} = props;

  return (
    <main>
      {page === pages.home
      ? (
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
      )
      : page === pages.reserveTable1
      ? <FormStepOne></FormStepOne>
      : page === pages.reserveTable2
      ? <FormStepTwo></FormStepTwo>
      : <Confirmation></Confirmation>
      }
    </main>
  );
}