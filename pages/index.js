// our-domain.com/
//Home Page
import Head from "next/head";
import PageList from "../components/places/PlaceList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

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

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Places</title>
        <meta
          name="description"
          content="Browse a variety of places to visit"
        />
      </Head>
      <PageList places={props.places} />
    </Fragment>
  );
}
export async function getStaticProps() {
  //fetch data from an api
  const client = await MongoClient.connect(
    "mongodb+srv://ashishbhusal:Nepal@nepal.dvmbtnu.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const placesCollection = db.collection("places");
  const places = await placesCollection.find().toArray();
  client.close();

  return {
    props: {
      places: places.map((place) => ({
        title: place.title,
        address: place.address,
        image: place.image,
        id: place._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
