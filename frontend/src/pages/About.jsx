import React from "react";
import { Container } from "reactstrap";
import "../styles/about.css";
import Testimonials from "../components/Testimonial/Testimonials";
import customer1 from '../assets/images/customer-logos/ronb.png';
import customer2 from '../assets/images/customer-logos/ghumante.png';
import customer3 from '../assets/images/customer-logos/kantipur.png';
import customer4 from '../assets/images/customer-logos/amanah.png';
import customer5 from '../assets/images/customer-logos/nepal.png';
import customer6 from '../assets/images/customer-logos/plane.png';

const About = () => {
  return (
    <Container className="container">
      {/* Our Story Section */}
      <div className="story-section">
        <h1 className="customer-subtitle">Our Story</h1>
        <p>
          Nepal Wonders was founded on the belief that travel is more than just
          visiting new places – it's about creating unforgettable experiences,
          forging connections, and enriching lives. Our journey began when a
          group of passionate travelers came together with a shared vision to
          redefine the way people explore the world.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us-section">
        <h1 className="customer-subtitle">Why Choose Us</h1>
        <div className="why-choose-us-content">
          <p>
            <strong>Expertise:</strong> With years of industry experience and
            in-depth destination knowledge, our team of travel experts crafts
            personalized itineraries tailored to your interests and preferences.
          </p>
          <p>
            <strong>Authentic Experiences:</strong> We believe in immersing
            travelers in the heart of local culture, offering authentic
            experiences that go beyond typical tourist attractions.
          </p>
          <p>
            <strong>Sustainability:</strong> We are committed to minimizing our
            environmental footprint and supporting local communities through
            responsible tourism practices.
          </p>
          <p>
            <strong>Exceptional Service:</strong> From the moment you inquire
            about a trip to your safe return home, our dedicated team is
            committed to providing unparalleled service and support.
          </p>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="partners-section">
        <h1 className="customer-subtitle">Our Partners</h1>
        <div className="partners-content bg-greenish-light p-4 rounded-lg">
          {/* Partner Logos here */}
          <div className="logos">
          <img src={customer1} alt="" />
          <img src={customer2} alt="" />
          <img src={customer3} alt="" />
          <img src={customer4} alt="" />
          <img src={customer5} alt="" />
          <img src={customer6} alt="" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h1 className="customer-subtitle">What We Say About NepalWonders</h1>
        <Testimonials />
      </div>

      
    </Container>
  );
};

export default About;
