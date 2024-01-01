import CardContainer from "./card-container";
import styles from "./offers-section.module.css";
const OffersSection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.offersWrapper}>
        <b className={styles.offers}>Offers</b>
      </div>
      <div className={styles.frameGroup}>
        <CardContainer
          dimensionText="/Bhudda air.jpg"
          offerImageUrl="Domestic Flights"
          promotionText="Huge savings on flight with Khalti."
          flightDealText="Book domestic flights starting @ just रु3459"
        />
        <CardContainer
          dimensionText="/image-191@2x.png"
          offerImageUrl="Domestic  Hotels"
          promotionText="Enjoy upto 20% off on International Hotels"
          flightDealText="Make the most of  this deal on your first booking with trxvl."
          propLeft="921px"
          propBackgroundImage={`url("/frame-311@3x.png")`}
          propWidth="351.5px"
          propHeight="234.4px"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv}>
            <div className={styles.bytesizeheartParent}>
              <img
                className={styles.bytesizeheartIcon1}
                alt=""
                src="/bytesizeheart.svg"
              />
              <img
                className={styles.image19Icon}
                alt=""
                src="/image-192@2x.png"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent1}>
                <div className={styles.bankOfferParent}>
                  <div className={styles.bankOffer}>Bank Offer</div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.getUpto30InstantDiscountWrapper}>
                      <div className={styles.getUpto301}>
                        Get upto 30% instant discount
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.getDiscountOnFlightsHotelWrapper}>
                  <div className={styles.getDiscountOn1}>
                    Get discount on flights, hotels and holiday packages with
                    HDFC bank credit card.
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.bookNowWrapper}>
                  <div className={styles.offers}>Book Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
