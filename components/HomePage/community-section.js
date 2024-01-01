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
        <FormContainer dimensionCode="/Chitwan1.jpg" locationName="Chitwan" />
        <FormContainer
          dimensionCode="/Pokhara1.jpg"
          locationName="Pokhara"
          propLeft="529.2px"
        />
        
        <FormContainer
          dimensionCode="/Pashupati.jpeg"
          locationName="Kathmandu"
          propLeft="925.5px"
        />
      </div>
    </div>
  );
};

export default CommunitySection;
