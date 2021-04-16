import styles from "./Oczekiwanie.module.css";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { STAN } from "../Refleks";
import { wylosujCzasOczekiwaniaMs } from "./OczekiwanieUtils";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
}

const Oczekiwanie: React.FC<Props> = ({ setStan }) => {
  const timer = useRef(null);

  useEffect(() => {
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
