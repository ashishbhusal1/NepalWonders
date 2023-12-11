import classes from "./LoginPage.module.css";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <img
          src="mountain.jpg"
          className={classes.mountain}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            textAlign: "left",
          }}
        />
      </div>
      <div className={classes.rightColumn}>
        <div>
          <img src="plane.png"/>
        </div>
        <div>
          Login form
        </div>
        <div>
          <div>
            <img src="rhino.png"/>
          </div>
          <div>
            <img src="flower.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;