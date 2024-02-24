import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from './../shared/Subtitle'
import worldImg from './../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return <>
  {/*===========Hero Section Start ============ */}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Travelling opens the door to creating <span className="highlight">memories</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas ea praesentium temporibus ut inventore officia magni voluptatum voluptate dolor 
                distinctio mollitia nobis, Perspiciatis rerum magnam hic in earum fugiat.
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    {/*===========Hero Section End ============ */}

    {/*============ Services ============== */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we offer</h5>
            <h2 className='services__title'>We offer the best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/*============ Services End ============== */}

    {/*============ Featured Destinations Section ============== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our featured destinations</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    {/*============ Featured Destinations Section ============== */}

    {/*============ experience section start =============== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>Our Experience helps<br/> provide the best services</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. dajsidjar <br/> vero! Quae explicabo quia sapiente illum, ipsa ducimus molestias</p>
            </div>

          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful Trips</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Clients served</h6>
            </div>
            <div className="counter__box">
              <span>5</span>
              <h6>Years experience</h6>
            </div>
          </div>

          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/*============ experience section end =============== */}

    {/*============ gallery section start ================ */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery__title'>Have a glimpse at our awesome safaris</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*============ gallery section end ================= */}

    {/*============ testimonial section start ================= */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Testimonials'}/>
            <h2 className='testimonial__title'>What our clients say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*============ testimonial section end =================== */}
    <Newsletter/>
  </>
}

export default Home