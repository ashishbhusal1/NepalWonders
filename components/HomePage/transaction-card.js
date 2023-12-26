import HizmetKoduButton from "./hizmet-kodu-button";
import styles from "./transaction-card.module.css";
const TransactionCard = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <img className={styles.facebookIcon1} alt="" src="/facebook.svg" />
        <img className={styles.facebookIcon1} alt="" src="/instagram.svg" />
        <img className={styles.facebookIcon1} alt="" src="/twitter.svg" />
        <img className={styles.facebookIcon1} alt="" src="/youtube.svg" />
      </div>
      <div className={styles.links}>
        <div className={styles.column01}>
          <div className={styles.medyaMerkezi}>Seslendirme ve Alt Jazz</div>
          <div className={styles.medyaMerkezi}>Media Market</div>
          <div className={styles.medyaMerkezi}>Gillie</div>
          <div className={styles.medyaMerkezi}>Size Last</div>
        </div>
        <div className={styles.column01}>
          <div className={styles.medyaMerkezi}>Self Betimes</div>
          <div className={styles.medyaMerkezi}>Yatırımcı İlişkileri</div>
          <div className={styles.medyaMerkezi}>Basal Himmler</div>
        </div>
        <div className={styles.column01}>
          <div className={styles.medyaMerkezi}>Yard Market</div>
          <div className={styles.medyaMerkezi}>Is İmkanları</div>
          <div className={styles.medyaMerkezi}>Car Tercihleri</div>
        </div>
        <div className={styles.column01}>
          <div className={styles.medyaMerkezi}>Hedge Karla</div>
          <div className={styles.medyaMerkezi}>Mullein Koşulları</div>
          <div className={styles.medyaMerkezi}>Autumnal Bulgier</div>
        </div>
      </div>
      <HizmetKoduButton
        serviceCode="Helmet KOD"
        hizmetKoduButtonBorder="1.1px solid var(--color-white)"
        hizmetKoduButtonPosition="absolute"
        hizmetKoduButtonWidth="7.62%"
        hizmetKoduButtonTop="calc(50% + 34.3px)"
        hizmetKoduButtonRight="68.81%"
        hizmetKoduButtonLeft="23.57%"
        hizmetKoduFontSize="14.39px"
        hizmetKoduFontWeight="unset"
        hizmetKoduColor="#fff"
      />
      <div
        className={styles.netflixIncI062d573a0ee091}
      >{`© 1997-2021 Netflix, Inc.  {i-062d573a0ee099242}`}</div>
      <b className={styles.trxvl}>NepalWonders</b>
    </div>
  );
};

export default TransactionCard;
