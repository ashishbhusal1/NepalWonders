import styles from "./search-form-container.module.css";
const SearchFormContainer = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <img
            className={styles.akarIconssearch1}
            alt=""
            src="/akariconssearch.svg"
          />
          <div className={styles.checkIn}>Search destinations, hotels</div>
        </div>
        <div className={styles.searchWrapper}>
          <b className={styles.checkIn}>Search</b>
        </div>
      </div>
    </div>
  );
};

export default SearchFormContainer;
