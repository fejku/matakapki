import { Dispatch, SetStateAction } from "react";
import { STAN } from "./Kolory";

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
}

const Poczatek: React.FC<Props> = ({ setStan }) => {
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
