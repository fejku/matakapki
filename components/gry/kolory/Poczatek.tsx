import styles from "./Poczatek.module.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { STAN } from "./Kolory";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  setWynik: Dispatch<SetStateAction<number>>;
}

const Poczatek: React.FC<Props> = ({ setStan, setWynik }) => {
  useEffect(() => {
    setWynik(0);
  }, []);

  const handleStartClick = () => {
    setStan(STAN.WYBOR);
  };

  return (
    <div className={styles.Poczatek}>
      <button onClick={handleStartClick} className={styles.StartButton}>
        Start
      </button>
    </div>
  );
};

export default Poczatek;
