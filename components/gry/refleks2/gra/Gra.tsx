import styles from "./Gra.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { STAN } from "../Refleks";
import { wylosujStyl } from "./GraUtils";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  wynik: number;
  setWynik: Dispatch<SetStateAction<number>>;
}

const Gra: React.FC<Props> = ({ setStan, wynik, setWynik }) => {
  const [czasRozpoczecia, setCzasRozpoczecia] = useState<Date>(null);
  const [styl, setStyl] = useState({});
  const [wynikSformatowany, setWynikSformatowany] = useState("");

  useEffect(() => {
    setCzasRozpoczecia(new Date());
    setStyl(wylosujStyl());

    if (wynik > 0) {
      setWynikSformatowany(`Twój czas reakcji to: ${wynik.toFixed(4)} sek.`);
    } else {
      setWynikSformatowany("Naciśnij na kształt.");
    }
  }, []);

  const handleOczekiwanieClick = () => {
    const czasZakonczenia = new Date();

    setWynik((czasZakonczenia.getTime() - czasRozpoczecia.getTime()) / 1000);
    setStan(STAN.OCZEKIWANIE);
  };

  return (
    <div className={styles.Gra}>
      <div className={styles.Wynik}>{wynikSformatowany}</div>
      <div className={styles.Plansza}>
        <button onClick={handleOczekiwanieClick} className={styles.Button} style={styl} />
      </div>
    </div>
  );
};

export default Gra;
