import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";

interface Props {}

const IleCzasuZostalo: React.FC<Props> = () => {
  const [poczatek, setPoczatek] = useState("");

  const handlePoczatekChange = (e: InputHTMLAttributes<HTMLInputElement>) => {
    setPoczatek(e.target.value);
  };

  const a = () => {
    const czas = "07:51";
    const pozostalo = "08:00";

    const rozdzielonyCzas = czas.split(":");
  };

  const wylicz = () => {
    if (poczatek) {
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="appt-time">Początek</label>
        <input id="appt-time" type="time" name="appt-time" value={poczatek} onChange={handlePoczatekChange}></input>
      </div>
      <div>
        <input type="checkbox" />
        <label htmlFor="appt-time">Przerwa od</label>
        <input id="appt-time" type="time" name="appt-time" value={poczatek} onChange={handlePoczatekChange}></input>

        <label htmlFor="appt-time">do</label>
        <input id="appt-time" type="time" name="appt-time" value={poczatek} onChange={handlePoczatekChange}></input>
      </div>
      <div>Koniec {wylicz()}</div>
    </div>
  );
};

export default IleCzasuZostalo;
