import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.trxvlParent}>
        <b className={styles.trxvl}>trxvl.</b>
        <div className={styles.frameParent}>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.staysWrapper}>
            <div className={styles.home}>Stays</div>
          </div>
          <div className={styles.staysWrapper}>
            <div className={styles.home}>Flights</div>
          </div>
          <div className={styles.staysWrapper}>
            <div className={styles.home}>Packages</div>
          </div>
          <div className={styles.staysWrapper}>
            <b className={styles.home}>Sign Up</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
