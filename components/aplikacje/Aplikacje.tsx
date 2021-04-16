import styles from "./Aplikacje.module.css";
import Link from "next/link";

interface Props {}

const Aplikacje: React.FC<Props> = () => {
  return (
    <div className={styles.Aplikacje}>
      <Link href="/aplikacje/manga">
        <a className={styles.Aplikacja}>Manga</a>
      </Link>
      <Link href="/aplikacje/potrawy">
        <a className={styles.Aplikacja}>Potrawy</a>
      </Link>
      <Link href="/aplikacje/praca">
        <a className={styles.Aplikacja}>Praca</a>
      </Link>
    </div>
  );
};

export default Aplikacje;
