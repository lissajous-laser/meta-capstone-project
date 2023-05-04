import "../styles/Testimonials.css";
import { TestimonialCard } from "./TestimonialCard";
import person1 from "../icons_assets/person-1.jpg";
import person2 from "../icons_assets/person-2.jpg";
import person3 from "../icons_assets/person-3.jpg";
import person4 from "../icons_assets/person-4.jpg";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__content">
        <h2 className="testimonials__heading">Our Customers</h2>
        <div className="testimonials__cards">
          <TestimonialCard
            portrait={person1}
            name="Joni B"
            text="I love the menu here, there is something for everyone."
          />
          <TestimonialCard
            portrait={person2}
            name="Alice K"
            text="Food is amazing, staff are so friendly, love this place."
          />
          <TestimonialCard
            portrait={person3}
            name="Sam R"
            text="Always enjoy excellent food, service and atmosphere here!"
          />
          <TestimonialCard
            portrait={person4}
            name="Kirsten C"
            text="My go to for a casual catch up with friends for dinner, coffee and cake."
          />
        </div>
      </div>
    </section>
  );
}