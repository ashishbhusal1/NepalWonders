import { useMemo } from "react";
import styles from "./section-card.module.css";
const SectionCard = ({
  topVacationDestinations,
  image18,
  baliIndonasia,
  image181,
  kerryIreland,
  image182,
  sydneyAustralia,
  image183,
  parisFrance,
  propColor,
}) => {
  const topVacationDestinationsStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.topVacationDestinationsWrapper}>
        <b
          className={styles.topVacationDestinations1}
          style={topVacationDestinationsStyle}
        >
          {topVacationDestinations}
        </b>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.image18Parent}>
          <img className={styles.image18Icon} alt="" src={image18} />
          <div className={styles.baliIndonasia}>{baliIndonasia}</div>
        </div>
        <div className={styles.image18Group}>
          <img className={styles.image18Icon} alt="" src={image181} />
          <div className={styles.baliIndonasia}>{kerryIreland}</div>
        </div>
        <div className={styles.image18Container}>
          <img className={styles.image18Icon} alt="" src={image182} />
          <div className={styles.baliIndonasia}>{sydneyAustralia}</div>
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.image18Icon} alt="" src={image183} />
          <div className={styles.baliIndonasia}>{parisFrance}</div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
