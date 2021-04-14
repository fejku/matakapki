import { Dispatch, SetStateAction } from "react";
import { STAN } from "./Kolory";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
  wynik: number;
}

const Wynik: React.FC<Props> = ({ setStan, wynik }) => {
  const handleWynikClick = () => {
    setStan(STAN.POCZATEK);
  };

  return (
    <div>
      <button onClick={handleWynikClick}>Twój wynik: {wynik}</button>
    </div>
  );
};

export default Wynik;
