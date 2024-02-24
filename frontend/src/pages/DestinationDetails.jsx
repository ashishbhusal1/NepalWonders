import React, {useRef, useState} from 'react'
import '../styles/destination-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'

const DestinationDetails = () => {

  const {id} = useParams() 

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  const tour = tourData.find(tour=> tour.id === id)

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  const options = {day:'numeric',month:'long',year:'numeric'}

  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`)
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='7'>
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                  <span className='tour__rating d-flex align-items-center gap-1'>
                      <i class='ri-star-fill' style={{'color':'var(--secondary-color)'}}></i> 
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        'Not rated' 
                      ) : (
                      <span>({reviews.length})</span>
                      )} 
                  </span>
                  <span>
                    <i class='ri-map-pin-user-fill'></i> {address}
                  </span>
                  </div>

                  <div className="tour__extra-details">
                    <span><i class='ri-map-pin-2-line'></i> {city}</span>
                    <span><i class='ri-money-dollar-circle-line'></i> ${price} /per person</span>
                    <span><i class='ri-group-line'></i> {maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* ============== tour reviews section ============== */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="rating__group d-flex align-items-center gap-3">
                      <span onClick={()=> setTourRating(1)}>
                        1 <i class='ri-star-s-fill'></i>
                      </span>
                      <span onClick={()=> setTourRating(2)}>
                        2 <i class='ri-star-s-fill'></i>
                      </span>
                      <span onClick={()=> setTourRating(3)}>
                        3 <i class='ri-star-s-fill'></i>
                      </span>
                      <span onClick={()=> setTourRating(4)}>
                        4 <i class='ri-star-s-fill'></i>
                      </span>
                      <span onClick={()=> setTourRating(5)}>
                        5 <i class='ri-star-s-fill'></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                      <button className="btn primary__btn text-white" type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className='user__reviews'>
                      {
                        reviews.map(review=>(
                          <div className="review__item">
                            <img src={avatar} alt="" />
                            <div className="w-100">
                              <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                  <h5>Collins</h5>
                                  <p>{new Date().toLocaleDateString("en-US", options)}</p>
                                </div>
                                <span className='d-flex align-items-center'>
                                  5<i class='ri-star-s-fill'></i>
                                </span>
                              </div>

                              <h6>Amazing Tour</h6>
                            </div>
                          </div>
                        ))
                      }
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg='5'>
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default DestinationDetails