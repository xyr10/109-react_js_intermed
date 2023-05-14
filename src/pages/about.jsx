import "./about.css";

function About() {
  return (
    <div className="about">
      <img src="/images/Sunset.jpg" alt="bio" />
      <h3>Xyrone Ocampo</h3>

      <h4>
        Xyrone has owned that sneakershop located on 3rd Ave in Chula Vista
        since 2015. Selling over $1M in sales each year, after obtaining another
        PPP loan in 2020 when COVID struck, her was able to purchase a new batch
        of Travis Scott deadstock kicks. This opportunity allowed him to
        increase sales and become the number 1 sneakershop in the entire Chula
        Vista
      </h4>
    </div>
  );
}

export default About;

// HW: In React, what's the difference between "Default" vs "Named Exports"
// On React you can only have one parent element, and 2) you should not return nothing
