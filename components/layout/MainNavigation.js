import Link from "next/link";
import styles from "./MainNavigation.module.css";
const Header = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.trxvlParent}>
        <img src="logo.png"  className={styles.logo1}/>
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
