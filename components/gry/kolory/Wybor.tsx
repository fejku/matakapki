import styles from "./Wybor.module.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import clsx from "clsx";
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

const wylosujDrugiKolor = (kolor: Kolor, listaKolorow: Kolor[]) => {
  return Math.floor(Math.random() * 2) === 0 ? kolor : wylosujKolor(listaKolorow);
};

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  wynik: number;
  setWynik: Dispatch<SetStateAction<number>>;
}

const Wybor: React.FC<Props> = ({ setStan, wynik, setWynik }) => {
  const [wylosowanyKolor, setWylosowanyKolor] = useState(wylosujKolor(listaKolorow));
  const [drugiWylosowanyKolor, setDrugiWylosowanyKolor] = useState(wylosujDrugiKolor(wylosowanyKolor, listaKolorow));
  const [progress, setProgress] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setProgress((p) => {
        if (p < 100) {
          p += 5;
        } else {
          setStan(STAN.WYNIK);
        }
        return p;
      });
    }, 100);
  }, [progress]);

  const handleTakClick = () => {
    if (wylosowanyKolor.nazwa === drugiWylosowanyKolor.nazwa) {
      clearTimeout(timer.current);
      setWylosowanyKolor(wylosujKolor(listaKolorow));
      setDrugiWylosowanyKolor(wylosujDrugiKolor(wylosowanyKolor, listaKolorow));
      setProgress(0);
      setWynik((wynik) => wynik + 1);
    } else {
      setStan(STAN.WYNIK);
    }
  };

  const handleNieClick = () => {
    if (wylosowanyKolor.nazwa !== drugiWylosowanyKolor.nazwa) {
      clearTimeout(timer.current);
      setWylosowanyKolor(wylosujKolor(listaKolorow));
      setDrugiWylosowanyKolor(wylosujDrugiKolor(wylosowanyKolor, listaKolorow));
      setProgress(0);
      setWynik((wynik) => wynik + 1);
    } else {
      setStan(STAN.WYNIK);
    }
  };

  return (
    <div className={styles.Wybor}>
      <ProgressBar progress={progress} />
      <div className={styles.Kolor} style={{ color: drugiWylosowanyKolor.kolor }}>
        <div className={styles.Wynik}>Wynik: {wynik}</div>
        {wylosowanyKolor.nazwa}
      </div>
      <div className={styles.Przyciski}>
        <button className={clsx(styles.Przycisk, styles.PrzyciskTak)} onClick={handleTakClick}>
          Tak
        </button>
        <button className={clsx(styles.Przycisk, styles.PrzyciskNie)} onClick={handleNieClick}>
          Nie
        </button>
      </div>
    </div>
  );
};

export default Wybor;
