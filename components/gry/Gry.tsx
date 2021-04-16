import styles from "./Gry.module.css";
import Link from "next/link";

interface Props {}

const Gry: React.FC<Props> = () => {
  return (
    <div className={styles.Gry}>
      <Link href="/gry/kolory">
        <a className={styles.Gra}>Kolory</a>
      </Link>
      <Link href="/gry/refleks">
        <a className={styles.Gra}>Refleks</a>
      </Link>
      <Link href="/gry/refleks2">
        <a className={styles.Gra}>Refleks 2</a>
      </Link>
    </div>
  );
};

export default Gry;
