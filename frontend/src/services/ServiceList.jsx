import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `We analyze climate data to identify the optimal travel times, ensuring our customers book tours to experience the best possible weather.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `We offer expert tour guides who enhance your travel experience with their local knowledge, ensuring memorable and immersive adventures.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Our tours are fully customizable, allowing travelers to tailor their experiences to their preferences, ensuring a unique and personal journey.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList