import styles from "./Header.module.css";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <div className={styles.hamburger}>
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
