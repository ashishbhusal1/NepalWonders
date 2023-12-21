import FormContainer from "./form-container";
import styles from "./community-section.module.css";
const CommunitySection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.connectWithOtherTravellersWrapper}>
        <b className={styles.connectWithOther1}>
          Connect with other travelers in our community
        </b>
      </div>
      <div className={styles.frameGroup}>
        <FormContainer dimensionCode="/frame-313@2x.png" locationName="India" />
        <FormContainer
          dimensionCode="/frame-314@2x.png"
          locationName="Travel Talk"
          propLeft="529.2px"
        />
        <FormContainer
          dimensionCode="/frame-315@2x.png"
          locationName="Beach"
          propLeft="925.5px"
        />
        <FormContainer
          dimensionCode="/frame-316@2x.png"
          locationName="Mountains"
          propLeft="1321.8px"
        />
      </div>
    </div>
  );
};

export default CommunitySection;
