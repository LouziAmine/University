
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <ul className={styles.FooterList}>
        <li>
          <Link href="/">University</Link>
        </li>
        <li>
          <Link  href="/">© 2025 University. Tous droits réservés.</Link>
        </li>
        <li>
          <Link className={styles.FooterLink} href="/CGU">CGU</Link>
          <Link className={styles.FooterLink} href="/CGV">CGV</Link>
        </li>
      </ul>
    </div>
  );
}