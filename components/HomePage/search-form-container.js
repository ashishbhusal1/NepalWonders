import styles from "./search-form-container.module.css";
const SearchFormContainer = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.akarIconssearchParent}>
          <img
            className={styles.akarIconssearch1}
            alt=""
            src="/akariconssearch.svg"
          />
          <div className={styles.checkIn}>Search destinations, hotels</div>
        </div>
        <div className={styles.akarIconscalendarParent}>
          <img
            className={styles.akarIconssearch1}
            alt=""
            src="/akariconscalendar.svg"
          />
          <div className={styles.checkIn}>Check in</div>
        </div>
        <div className={styles.akarIconscalendarParent}>
          <img
            className={styles.akarIconssearch1}
            alt=""
            src="/akariconscalendar1.svg"
          />
          <div className={styles.checkIn}>Check out</div>
        </div>
        <div className={styles.akarIconscalendarParent}>
          <img
            className={styles.akarIconssearch1}
            alt=""
            src="/fontistomale.svg"
          />
          <div className={styles.checkIn}>1 room, 2 adults</div>
        </div>
        <div className={styles.searchWrapper}>
          <b className={styles.checkIn}>Search</b>
        </div>
      </div>
    </div>
  );
};

export default SearchFormContainer;
