import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import './Testimonials.css'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          NepalWonders is your premier destination for discovering the beauty
          and adventure of Nepal. With expertly curated experiences,
          personalized service, and a commitment to excellence and
          sustainability, we offer travelers a seamless and unforgettable
          journey. Embark on an adventure with us and uncover the wonders of
          Nepal in a way that's authentic, enriching, and truly memorable.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="testimonial-image" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Ashish Bhusal</h6>
            <p>CEO</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          As Operations Manager at NepalWonders, I meticulously oversee every
          aspect of travelers' journeys, from coordinating logistics to ensuring
          impeccable service standards. With a dedicated team by my side, we
          continually strive to consistently provide seamless, exceptional
          experiences that surpass expectations, crafting unforgettable memories
          for every traveler.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="testimonial-image" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Kabul Devkota</h6>
            <p>Operations Manager</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          As NepalWonders' Marketing Manager, I spearhead efforts to showcase
          Nepal's beauty globally. Through strategic campaigns and captivating
          content, we inspire wanderlust for Nepal's unique adventures. Our aim
          is to position NepalWonders as the top choice for travelers seeking
          unforgettable experiences, making us their first and best destination
          for adventure and exploration.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="testimonial-image" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Nabin Pandey</h6>
            <p>Marketing Manager</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
