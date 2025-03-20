// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">University</Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/Formation">Formation</Link>
          <Link className={styles.navLink} href="/Orientation">Orientation</Link>
          <Link className={styles.navLink} href="/Concours">Concours</Link>
        </li>
        <li>
          <Link href="/contact">0600000000</Link>
        </li>
      </ul>
    </nav>
  );
}