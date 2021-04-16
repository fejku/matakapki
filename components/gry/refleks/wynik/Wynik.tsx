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
    let sformatowanyWynik = "";
    if (wynik) {
      sformatowanyWynik = `Twój wynik: ${wynik.toFixed(4)} sek.`;
    } else {
      sformatowanyWynik = "Bądź bardziej cierpliwy!!!";
    }
    setWynikSformatowany(sformatowanyWynik);
  }, []);

  const handleWynikClick = () => {
    setStan(STAN.OCZEKIWANIE);
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
