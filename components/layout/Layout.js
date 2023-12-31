// Layout.js
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
