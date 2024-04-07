import React from "react";
import { Container } from "reactstrap";
import "../styles/About.css";
import Testimonials from "../components/Testimonial/Testimonials";

const About = () => {
  return (
    <Container className="container">
      <div className="story-section">
        <h1 className="text-greenish">Our Story</h1>
        <p>
          Nepal Wonders was founded on the belief that travel is more than just
          visiting new places – it's about creating unforgettable experiences,
          forging connections, and enriching lives. Our journey began when a
          group of passionate travelers came together with a shared vision to
          redefine the way people explore the world.
        </p>
      </div>

      <div className="why-choose-us-section">
        <h1 className="text-greenish">Why Choose Us</h1>
        <p>
          Expertise: With years of industry experience and in-depth destination
          knowledge, our team of travel experts crafts personalized itineraries
          tailored to your interests and preferences.
        </p>
        <p className="text-gray-700 text-center max-w-prose">
          Authentic Experiences: We believe in immersing travelers in the heart
          of local culture, offering authentic experiences that go beyond
          typical tourist attractions.
        </p>
        <p className="text-gray-700 text-center max-w-prose">
          Sustainability: We are committed to minimizing our environmental
          footprint and supporting local communities through responsible tourism
          practices.
        </p>
        <p className="text-gray-700 text-center max-w-prose">
          Exceptional Service: From the moment you inquire about a trip to your
          safe return home, our dedicated team is committed to providing
          unparalleled service and support.
        </p>
      </div>

      <div className="partners-section">
        <h1 className="text-greenish">Our Partners</h1>
        <div className="bg-greenish-light p-4 rounded-lg">Partner-logo</div>
      </div>

      <div className="testimonials-section">
        <h1 className="text-greenish">What our fans say about us</h1>
        <Testimonials />
      </div>

      <div className="get-in-touch-section">
        <h1 className="text-greenish">Get in touch</h1>
        <p>-------Get in touch---------</p>
      </div>
    </Container>
  );
};

export default About;
