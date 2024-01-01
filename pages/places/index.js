import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import PlaceList from "../../components/places/PlaceList";

function PlacePage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Places</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React places!'
        />
      </Head>
      <PlaceList places={props.places} />;
    </Fragment>
  );
}
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://ashishbhusal:Nepal@nepal.dvmbtnu.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const placesCollection = db.collection('places');

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

export default PlacePage;