import { useMemo } from "react";
import styles from "./form-container.module.css";
const FormContainer = ({ dimensionCode, locationName, propLeft }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <img className={styles.frameChild} alt="" src={dimensionCode} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.indiaWrapper}>
            <div className={styles.india}>{locationName}</div>
          </div>
          <div className={styles.travelCommunity}>Travel community</div>
          <div className={styles.travelCommunity}>155,073 travelers</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
