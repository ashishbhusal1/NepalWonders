import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import PlaceDetail from "../../components/places/PlaceDetail";

function PlaceDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.placeData.title}</title>
        <meta name="description" content={props.placeData.description} />
      </Head>
      <PlaceDetail
        image={props.placeData.image}
        title={props.placeData.title}
        address={props.placeData.address}
        description={props.placeData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ashishbhusal:Nepal@nepal.dvmbtnu.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const placesCollection = db.collection("places");

  const places = await placesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: places.map((place) => ({
      params: { placeId: place._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const placeId = context.params.placeId;

  // Check if placeId is a valid ObjectId
  if (!ObjectId.isValid(placeId)) {
    return {
      notFound: true, // Return a 404 page if placeId is not valid
    };
  }

  const client = await MongoClient.connect(
    "mongodb+srv://ashishbhusal:Nepal@nepal.dvmbtnu.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const placesCollection = db.collection("places");

  // Convert placeId to ObjectId only if it's a valid ObjectId
  const selectedPlace = await placesCollection.findOne({
    _id: new ObjectId(placeId),
  });

  client.close();

  // Return notFound if the place is not found
  if (!selectedPlace) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      placeData: {
        id: selectedPlace._id.toString(),
        title: selectedPlace.title,
        address: selectedPlace.address,
        image: selectedPlace.image,
        description: selectedPlace.description,
      },
    },
  };
}


export default PlaceDetails;


//This is index.js on index.js