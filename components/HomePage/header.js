import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.trxvlParent}>
        <b className={styles.trxvl}>NepalWonders</b>

        {/* <div className={styles.frameParent}>
          <div className={styles.homeWrapper}>
            <Link href="/" className={styles.home}>
              Home
            </Link>
          </div>
          <div className={styles.staysWrapper}>
            <Link href="#">Places</Link>
          </div>
          <div className={styles.staysWrapper}>
            <Link href="#">About Us</Link>
          </div>
          <div className={styles.staysWrapper}>
            <Link href="#">Packages</Link>
          </div>
          <div className={styles.staysWrapper}>
            <Link href="/login">Login</Link>
          </div>
        </div> */}
        <div className={styles.header}>
        <nav className={styles.links}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href='#'>Places</Link>
                    </li>
                    <li>
                        <Link href='#'>Gallery</Link>
                    </li>
                    
                    <li>
                        <Link href='#'>About Us</Link>
                    </li>
                    
                    <li>
                        <Link href='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
            </div>
      </div>
    </div>
  );
};

export default Header;
