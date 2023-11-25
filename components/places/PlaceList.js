import PlaceItem from "./PlaceItem";
import classes from './PlaceList.module.css';
function PlaceList(props) {
  return (
    <ul className={classes.list}>
      {props.places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          address={place.address}
        />
      ))}
    </ul>
  );
}
export default PlaceList;
