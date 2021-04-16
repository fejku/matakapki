import styles from "./Oczekiwanie.module.css";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { STAN } from "../Refleks";
import { wylosujCzasOczekiwaniaMs } from "./OczekiwanieUtils";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  setWynik: Dispatch<SetStateAction<number>>;
}

const Oczekiwanie: React.FC<Props> = ({ setStan, setWynik }) => {
  const timer = useRef(null);

  useEffect(() => {
    setWynik(0);

    const wylosowanyCzas = wylosujCzasOczekiwaniaMs(3000);

    timer.current = setTimeout(() => {
      setStan(STAN.GRA);
    }, wylosowanyCzas);
  }, []);

  const handleOczekiwanieClick = () => {
    clearTimeout(timer.current);
    setStan(STAN.WYNIK);
  };

  return (
    <div className={styles.Oczekiwanie}>
      <button onClick={handleOczekiwanieClick} className={styles.Button}>
        Czekaj
      </button>
    </div>
  );
};

export default Oczekiwanie;
