import styles from "./Header.module.css";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <header className={styles.header}>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
