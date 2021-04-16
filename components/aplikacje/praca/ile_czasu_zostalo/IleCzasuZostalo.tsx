import { useState } from "react";
import { formatujMinutyNaCzas, podajIloscMinutDlaPrzerwy, zamienCzasNaMinuty } from "./IleCzasuZostaloUtils";

interface Props {}

const IleCzasuZostalo: React.FC<Props> = () => {
  const [czasPracy, setCzasPracy] = useState("08:00");
  const [poczatek, setPoczatek] = useState("");
  const [czyPrzerwa, setCzyPrzerwa] = useState(false);
  const [przerwaPoczatek, setPrzerwaPoczatek] = useState("");
  const [przerwaKoniec, setPrzerwaKoniec] = useState("");

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

  const wylicz = () => {
    if (!poczatek) {
      return "";
    }

    let wynikWMinutach =
      zamienCzasNaMinuty(czasPracy) +
      zamienCzasNaMinuty(poczatek) +
      podajIloscMinutDlaPrzerwy(czyPrzerwa, przerwaPoczatek, przerwaKoniec);

    return formatujMinutyNaCzas(wynikWMinutach);
  };

  return (
    <div>
      <div>
        <label htmlFor="inputCzasPracy">CzasPracy</label>
        <input type="time" name="inputCzasPracy" value={czasPracy} onChange={handleCzasPracyChange} />
      </div>
      <div>
        <label htmlFor="inputPoczatek">Początek</label>
        <input type="time" name="inputPoczatek" value={poczatek} onChange={handlePoczatekChange} />
      </div>
      <div>
        <input type="checkbox" checked={czyPrzerwa} onChange={handleCzyPrzerwaChange} />
        <label htmlFor="inputPrzerwaPoczatek">Przerwa od</label>
        <input type="time" name="inputPrzerwaPoczatek" value={przerwaPoczatek} onChange={handlePrzerwaPoczatekChange} />

        <label htmlFor="inputPrzerwaKoniec">do</label>
        <input type="time" name="inputPrzerwaKoniec" value={przerwaKoniec} onChange={handlePrzerwaKoniecChange} />
      </div>
      <div>Koniec {wylicz()}</div>
    </div>
  );
};

export default IleCzasuZostalo;
