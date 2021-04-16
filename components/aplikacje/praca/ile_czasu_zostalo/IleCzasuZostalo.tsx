import styles from "./IleCzasuZostalo.module.css";
import { useEffect, useState } from "react";
import { wyznaczCzas } from "./IleCzasuZostaloUtils";
import clsx from "clsx";

interface Props {}

const IleCzasuZostalo: React.FC<Props> = () => {
  const [czasPracy, setCzasPracy] = useState("08:00");
  const [poczatek, setPoczatek] = useState("");
  const [czyPrzerwa, setCzyPrzerwa] = useState(false);
  const [przerwaPoczatek, setPrzerwaPoczatek] = useState("");
  const [przerwaKoniec, setPrzerwaKoniec] = useState("");
  const [wynik, setWynik] = useState("");

  useEffect(() => {
    setWynik(wyznaczCzas(poczatek, czasPracy, czyPrzerwa, przerwaPoczatek, przerwaKoniec));
  }, [czasPracy, poczatek, czyPrzerwa, przerwaPoczatek, przerwaKoniec]);

  const handleCzasPracyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCzasPracy(e.target.value);
  };

  const handlePoczatekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoczatek(e.target.value);
  };

  const handleCzyPrzerwaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCzyPrzerwa(e.target.checked);
  };

  const handlePrzerwaPoczatekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrzerwaPoczatek(e.target.value);
  };

  const handlePrzerwaKoniecChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrzerwaKoniec(e.target.value);
  };

  return (
    <div className={styles.IleCzasuZostalo}>
      <div className={styles.Wiersz}>
        <label htmlFor="inputCzasPracy">Czas pracy</label>
        <input type="time" name="inputCzasPracy" value={czasPracy} onChange={handleCzasPracyChange} />
      </div>
      <div className={styles.Wiersz}>
        <label htmlFor="inputPoczatek">Początek</label>
        <input type="time" name="inputPoczatek" value={poczatek} onChange={handlePoczatekChange} />
      </div>
      <div className={clsx(styles.Wiersz, styles.Przerwa)}>
        <div>
          Przerwa
          <input type="checkbox" checked={czyPrzerwa} onChange={handleCzyPrzerwaChange} />
        </div>
        <div>
          <label htmlFor="inputPrzerwaPoczatek">od</label>
          <input
            type="time"
            name="inputPrzerwaPoczatek"
            value={przerwaPoczatek}
            onChange={handlePrzerwaPoczatekChange}
          />
        </div>
        <div>
          <label htmlFor="inputPrzerwaKoniec">do</label>
          <input type="time" name="inputPrzerwaKoniec" value={przerwaKoniec} onChange={handlePrzerwaKoniecChange} />
        </div>
      </div>
      <div className={styles.Wiersz}>{wynik}</div>
    </div>
  );
};

export default IleCzasuZostalo;
