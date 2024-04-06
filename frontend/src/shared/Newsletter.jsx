import React, { useState } from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mleqodbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Error subscribing. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error subscribing. Please try again later.');
    }
  };

  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information</h2>

              <form onSubmit={handleSubmit}>
                <div className="newsletter__input">
                  <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <button className="btn newsletter__btn" type="submit">Subscribe</button>
                </div>
              </form>

              {message && <p>{message}</p>}
            </div>
          </Col>
          <Col lg='6'>
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewsLetter;
