import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <FaInstagram className={styles.Icon} />
        <FaTwitter className={styles.Icon} />
        <FaLinkedin className={styles.Icon} />
        <FaYoutube className={styles.Icon} />
      </div>
      <img src="logo.png" className={styles.logo}/>
      <div className={styles.links}>
        <div className={styles.column}>
          <p className={styles.link}>Home</p>
          <p className={styles.link}>About Us</p>
          <p className={styles.link}>Services</p>
          <p className={styles.link}>Blog</p>
          <p className={styles.link}>Contact Us</p>
        </div>
      </div>
      <div className={styles.copyright}>{`© 2023 NepalWonders `}</div>
    </div>
  );
};

export default Footer;
