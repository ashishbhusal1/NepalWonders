//our domain.com/places

import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NewPlaceForm from "../../components/places/NewPlaceForm";

function NewPlacePage() {
  const router = useRouter();

  async function addPlaceHandler(enteredPlaceData) {
    const response = await fetch("/api/new-place", {
      method: "POST",
      body: JSON.stringify(enteredPlaceData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a new Place</title>
        <meta
          name="description"
          content="Add your own places for everyone to visit"
        />
      </Head>
      <NewPlaceForm onAddPlace={addPlaceHandler}/>
    </Fragment>
  );
}
export default NewPlacePage;
