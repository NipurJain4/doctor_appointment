import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Smart Healthcare Solution is a modern platform that simplifies hospital searches, doctor appointments, and patient management. Designed for ease of use and efficiency, it connects patients with the right care quickly and securely.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
