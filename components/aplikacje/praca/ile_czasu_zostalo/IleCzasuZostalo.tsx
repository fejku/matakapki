import { useState } from "react";

interface Props {}

const IleCzasuZostalo: React.FC<Props> = () => {
  const [poczatek, setPoczatek] = useState("");
  const [czyPrzerwa, setCzyPrzerwa] = useState(false);
  const [przerwaPoczatek, setPrzerwaPoczatek] = useState("");
  const [przerwaKoniec, setPrzerwaKoniec] = useState("");

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

    const [poczatekGodzina, poczatekMinuty] = poczatek.split(":");
    if (czyPrzerwa) {
      const [poczatekPrzerwyGodzina, poczatekPrzerwyMinuty] = przerwaPoczatek.split(":");
      const [koniecPrzerwyGodzina, koniecPrzerwyMinuty] = przerwaKoniec.split(":");

      const iloscMinutPoczatekPrzerwy = parseInt(poczatekPrzerwyGodzina) * 60 + parseInt(poczatekPrzerwyMinuty);
      const iloscMinutKoniecPrzerwy = parseInt(koniecPrzerwyGodzina) * 60 + parseInt(koniecPrzerwyMinuty);
      const roznicaMinut = iloscMinutKoniecPrzerwy - iloscMinutPoczatekPrzerwy;
    }
    const godzinaPoDodaniu = parseInt(poczatekGodzina) + 8;
    const godzinaWynik = godzinaPoDodaniu < 10 ? `0${godzinaPoDodaniu}` : godzinaPoDodaniu.toString();
    return `${godzinaWynik}:${poczatekMinuty}`;
  };

  return (
    <div>
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
