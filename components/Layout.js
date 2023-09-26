import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
