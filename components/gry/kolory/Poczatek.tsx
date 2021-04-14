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
    <div>
      <button onClick={handleStartClick}>Start</button>
    </div>
  );
};

export default Poczatek;
