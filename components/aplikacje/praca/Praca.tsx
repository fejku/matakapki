import styles from "./Praca.module.css";
import Link from "next/link";

interface Props {}

const Praca: React.FC<Props> = () => {
  return (
    <div className={styles.Praca}>
      <Link href="/aplikacje/praca/ile_czasu_zostalo">
        <a className={styles.PracaAplikacja}>Ile czasu zostało</a>
      </Link>
      <Link href="/aplikacje/praca/nadgodziny">
        <a className={styles.PracaAplikacja}>Nadgodziny</a>
      </Link>
    </div>
  );
};

export default Praca;
