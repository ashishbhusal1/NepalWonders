import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from './PlaceItem.module.css';

function PlaceItem(props) {
    const router = useRouter();
    function showDetailHandler(){
        router.push('/' + props.id);
    }
    
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}
export default PlaceItem;
