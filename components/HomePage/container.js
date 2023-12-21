import styles from "./container.module.css";
const Container = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon1} alt="" src="/image-4@2x.png" />
          <div className={styles.beaches}>Beaches</div>
        </div>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon1} alt="" src="/image-16@2x.png" />
          <div className={styles.beaches}>Deserts</div>
        </div>
        <div className={styles.image3Parent}>
          <img className={styles.image3Icon1} alt="" src="/image-3@2x.png" />
          <div className={styles.beaches}>Mountains</div>
        </div>
        <div className={styles.image13Parent}>
          <img className={styles.image3Icon1} alt="" src="/image-13@2x.png" />
          <div className={styles.beaches}>Iconic Cities</div>
        </div>
        <div className={styles.image13Parent}>
          <img className={styles.image3Icon1} alt="" src="/image-17@2x.png" />
          <div className={styles.beaches}>Houseboats</div>
        </div>
        <div className={styles.image13Parent}>
          <img className={styles.image4Icon1} alt="" src="/image-10@2x.png" />
          <div className={styles.beaches}>Countryside</div>
        </div>
        <div className={styles.image13Parent}>
          <img className={styles.image4Icon1} alt="" src="/image-5@2x.png" />
          <div className={styles.beaches}>Camping</div>
        </div>
        <div className={styles.image12Parent}>
          <img className={styles.image4Icon1} alt="" src="/image-12@2x.png" />
          <div className={styles.beaches}>Castles</div>
        </div>
        <div className={styles.image12Parent}>
          <img className={styles.image4Icon1} alt="" src="/image-15@2x.png" />
          <div className={styles.beaches}>Skiing</div>
        </div>
        <div className={styles.image13Parent}>
          <img className={styles.image4Icon1} alt="" src="/image-8@2x.png" />
          <div className={styles.beaches}>Tropical</div>
        </div>
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default Container;
