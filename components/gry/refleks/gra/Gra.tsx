import styles from "./Gra.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { STAN } from "../Refleks";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  setWynik: Dispatch<SetStateAction<number>>;
}

const Gra: React.FC<Props> = ({ setStan, setWynik }) => {
  const [czasRozpoczecia, setCzasRozpoczecia] = useState<Date>(null);

  useEffect(() => {
    setCzasRozpoczecia(new Date());
  }, []);

  const handleOczekiwanieClick = () => {
    const czasZakonczenia = new Date();

    setWynik((czasZakonczenia.getTime() - czasRozpoczecia.getTime()) / 1000);
    setStan(STAN.WYNIK);
  };

  return (
    <div className={styles.Gra}>
      <button onClick={handleOczekiwanieClick} className={styles.Button}>
        Naciśnij!!!
      </button>
    </div>
  );
};

export default Gra;
