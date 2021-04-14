import styles from "./Wybor.module.css";
import { Dispatch, SetStateAction } from "react";
import { STAN } from "./Kolory";
import ProgressBar from "./ProgressBar";

interface Kolor {
  kolor: string;
  nazwa: string;
}

const listaKolorow: Kolor[] = [
  { kolor: "red", nazwa: "Czerwony" },
  { kolor: "green", nazwa: "Zielony" },
  { kolor: "blue", nazwa: "Niebieski" },
  { kolor: "violet", nazwa: "Fioletowy" },
  { kolor: "black", nazwa: "Czarny" },
];

const wylosujKolor = (listaKolorow: Kolor[]) => {
  const kolorIndex = Math.floor(Math.random() * listaKolorow.length);
  return listaKolorow[kolorIndex];
};

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  setWynik: Dispatch<SetStateAction<number>>;
}

const Wybor: React.FC<Props> = ({ setStan, setWynik }) => {
  const wylosowanyKolor = wylosujKolor(listaKolorow);
  const wylosowanyStyl = wylosujKolor(listaKolorow);

  const handleTakClick = () => {
    if (wylosowanyKolor.nazwa === wylosowanyStyl.nazwa) {
      setWynik((wynik) => wynik + 1);
    } else {
      setStan(STAN.WYNIK);
    }
  };

  const handleNieClick = () => {
    if (wylosowanyKolor.nazwa !== wylosowanyStyl.nazwa) {
      setWynik((wynik) => wynik + 1);
    } else {
      setStan(STAN.WYNIK);
    }
  };

  return (
    <div className={styles.Wybor}>
      <ProgressBar czasTrwaniaSek={2} />
      <div className={styles.Kolor} style={{ color: wylosowanyStyl.kolor }}>
        {wylosowanyKolor.nazwa}
      </div>
      <div className={styles.Przyciski}>
        <button className={styles.Przycisk} onClick={handleTakClick}>
          Tak
        </button>
        <button className={styles.Przycisk} onClick={handleNieClick}>
          Nie
        </button>
      </div>
    </div>
  );
};

export default Wybor;
