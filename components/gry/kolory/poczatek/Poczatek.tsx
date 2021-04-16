import styles from "./Poczatek.module.css";
import { Dispatch, SetStateAction } from "react";
import { STAN } from "../Kolory";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
}

const Poczatek: React.FC<Props> = ({ setStan }) => {
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
