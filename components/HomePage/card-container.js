import { useMemo } from "react";
import styles from "./card-container.module.css";
const CardContainer = ({
  dimensionText,
  offerImageUrl,
  promotionText,
  flightDealText,
  propLeft,
  propBackgroundImage,
  propWidth,
  propHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const image19IconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.frameParent}>
        <div className={styles.bytesizeheartParent} style={frameDiv1Style}>
          <img
            className={styles.bytesizeheartIcon1}
            alt=""
            src="/bytesizeheart.svg"
          />
          <img
            className={styles.image19Icon}
            alt=""
            src={dimensionText}
            style={image19IconStyle}
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameGroup}>
            <div className={styles.domesticFlightsParent}>
              <div className={styles.domesticFlights}>{offerImageUrl}</div>
              <div className={styles.frameWrapper1}>
                <div className={styles.hugeSavingsOnFlightWithTrWrapper}>
                  <div className={styles.hugeSavingsOn1}>{promotionText}</div>
                </div>
              </div>
            </div>
            <div className={styles.bookDomesticFlightsStartingWrapper}>
              <div className={styles.bookDomesticFlights1}>
                {flightDealText}
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.bookNowWrapper}>
              <div className={styles.bookNow}>Book Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
