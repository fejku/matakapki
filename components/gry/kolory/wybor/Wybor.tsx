import styles from "./Wybor.module.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { STAN } from "../Kolory";
import ProgressBar from "./ProgressBar";
import { wylosujKolor, wylosujDrugiKolor } from "./Kolor";

const ODSWIEZANIE_MS = 100;
const CZAS_NA_ODPOWIEDZ_MS = 2000;

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  wynik: number;
  setWynik: Dispatch<SetStateAction<number>>;
}

const Wybor: React.FC<Props> = ({ setStan, wynik, setWynik }) => {
  const [wylosowanyKolor, setWylosowanyKolor] = useState(wylosujKolor());
  const [drugiKolor, setDrugiKolor] = useState(wylosujDrugiKolor(wylosowanyKolor));
  const [postep, setPostep] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setPostep((p) => {
        if (p < 100) {
          p += ODSWIEZANIE_MS / (CZAS_NA_ODPOWIEDZ_MS / ODSWIEZANIE_MS);
        } else {
          // minął czas
          setStan(STAN.WYNIK);
        }
        return p;
      });
    }, ODSWIEZANIE_MS);
  }, [postep]);

  const ustawStanPoprawny = () => {
    clearTimeout(timer.current);
    setWylosowanyKolor(wylosujKolor());
    setDrugiKolor(wylosujDrugiKolor(wylosowanyKolor));
    setWynik(wynik + 1);
    setPostep(0);
  };

  const handleTakClick = () => {
    if (wylosowanyKolor.nazwa === drugiKolor.nazwa) {
      ustawStanPoprawny();
    } else {
      setStan(STAN.WYNIK);
    }
  };

  const handleNieClick = () => {
    if (wylosowanyKolor.nazwa !== drugiKolor.nazwa) {
      ustawStanPoprawny();
    } else {
      setStan(STAN.WYNIK);
    }
  };

  return (
    <div className={styles.Wybor}>
      <ProgressBar postep={Math.floor(postep)} />
      <div className={styles.Kolor} style={{ color: drugiKolor.kolor }}>
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
