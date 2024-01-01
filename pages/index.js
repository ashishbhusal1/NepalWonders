// our-domain.com/
//Home Page
// import Head from "next/head";
// import PageList from "../components/places/PlaceList";
// import { MongoClient } from "mongodb";
// import { Fragment } from "react";

// const DUMMY_PLACES = [
//   {
//     id: "m1",
//     title: "Place 1",
//     image:
//       "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     address: "Address1",
//     description: "This is a first place",
//   },
//   {
//     id: "m2",
//     title: "Place 2",
//     image:
//       "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     address: "Address2",
//     description: "This is a second place",
//   },
// ];

// function HomePage(props) {
//   return (
//     <Fragment>
//       <Head>
//         <title>Home</title>
//         <meta
//           name="description"
//           content="Browse a variety of places to visit"
//         />
//       </Head>
//       <PageList places={props.places} />
//     </Fragment>
//   );
// }
// export async function getStaticProps() {
//   //fetch data from an api
//   const client = await MongoClient.connect(
//     "mongodb+srv://ashishbhusal:Nepal@nepal.dvmbtnu.mongodb.net/?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const placesCollection = db.collection("places");
//   const places = await placesCollection.find().toArray();
//   client.close();

//   return {
//     props: {
//       places: places.map((place) => ({
//         title: place.title,
//         address: place.address,
//         image: place.image,
//         id: place._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };
//}
// Import React if you haven't already
// import React from 'react';

// function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to Nepal Wonders!</h1>
//       <p>Explore the beauty of Nepal.</p>
//       <ul>
//         <li>Mount Everest</li>
//         <li>Pashupatinath Temple</li>
//         <li>...</li>
//       </ul>
//     </div>
//   );
// }

// export default HomePage;

import SearchFormContainer from "../components/HomePage/search-form-container";
import SectionCard from "../components/HomePage/section-card";
import OffersSection from "../components/HomePage/offers-section";
import CommunitySection from "../components/HomePage/community-section";
import styles from "./index.module.css";
const HomePage = () => {
  return (
    <div className={styles.image1Parent}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.frameChild} />
      <SearchFormContainer />
      <b className={styles.theWholeWorld1}>The whole Nepal awaits.</b>
      <div className={styles.image21Parent}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      </div>
      {/* <TransactionCard /> */}
      <div className={styles.frameParent}>
        <SectionCard
          topVacationDestinations="Top Vacation Destinations"
          image18="/Chitwan.jpg"
          baliIndonasia="Chitwan, Nepal"
          image181="/Kathmandu.jpg"
          kerryIreland="Kathmandu, Nepal"
          image182="/Pokhara.jpg"
          sydneyAustralia="Pokhara, Nepal"
          image183="/MustaNG.jpg"
          parisFrance="Mustang, Nepal"
        />
        <OffersSection />
        <SectionCard
          topVacationDestinations="Browse by property type"
          image18="/image-184@2x.png"
          baliIndonasia="Hotels"
          image181="/image-185@2x.png"
          kerryIreland="Apartments"
          image182="/image-186@2x.png"
          sydneyAustralia="Resorts"
          image183="/image-187@2x.png"
          parisFrance="Villas"
          propColor="#000"
        />
        <div className={styles.image20Parent}>
          <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
          <div className={styles.ourProfessionalAdvisors1}>
            Our professional advisors can craft your perfect itinerary
          </div>
          <b className={styles.planYourTrip1}>
            Plan your trip with travel expert
          </b>
        </div>
        <CommunitySection />
      </div>
    </div>
  );
};

export default HomePage;
