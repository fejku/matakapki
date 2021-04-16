import styles from "./Wynik.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { STAN } from "../Refleks";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  wynik: number;
}

const Wynik: React.FC<Props> = ({ setStan, wynik }) => {
  const [wynikSformatowany, setWynikSformatowany] = useState("");

  useEffect(() => {
    let a = ";";
    if (wynik) {
      a = `Twój wynik: ${wynik.toFixed(4)} sek.`;
    } else {
      a = "Bądź bardziej cierpliwy!!!";
    }
    setWynikSformatowany(a);
  }, []);

  const handleWynikClick = () => {
    setStan(STAN.POCZATEK);
  };

  return (
    <div className={styles.Wynik}>
      <button onClick={handleWynikClick} className={styles.StartButton}>
        {wynikSformatowany}
      </button>
    </div>
  );
};

export default Wynik;
