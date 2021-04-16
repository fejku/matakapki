import styles from "./Oczekiwanie.module.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { STAN } from "../Refleks";
import { wylosujCzasOczekiwaniaMs } from "./OczekiwanieUtils";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  wynik: number;
}

const Oczekiwanie: React.FC<Props> = ({ setStan, wynik }) => {
  const [wynikSformatowany, setWynikSformatowany] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    const wylosowanyCzas = wylosujCzasOczekiwaniaMs(2000);

    timer.current = setTimeout(() => {
      setStan(STAN.GRA);
    }, wylosowanyCzas);

    if (wynik > 0) {
      setWynikSformatowany(`Twój czas reakcji to: ${wynik.toFixed(4)} sek.`);
    } else {
      setWynikSformatowany("Naciśnij na kształt, gdy się pojawi.");
    }
  }, []);

  return (
    <div className={styles.Oczekiwanie}>
      <div className={styles.Wynik}>{wynikSformatowany}</div>
    </div>
  );
};

export default Oczekiwanie;
