import { Dispatch, SetStateAction, useEffect } from "react";
import { STAN } from "../kolory/Kolory";

const wylosujCzasOczekiwaniaMs = (maxCzas: number) => {
  const MINIMALNY_CZAS = 1000;
  return Math.floor(Math.random() * maxCzas) + MINIMALNY_CZAS;
};

interface Props {
  setStan: Dispatch<SetStateAction<STAN>>;
}

const Oczekiwanie: React.FC<Props> = ({ setStan }) => {
  // useEffect(() => {
  //   const wylosowanyCzasMs = wylosujCzasOczekiwaniaMs(4000);
  //   setTimeout(
  //     {
  //       setStan(STAN.)
  //     },
  //     wylosowanyCzasMs
  //   );
  //   return () => {
  //     cleanup;
  //   };
  // }, []);

  return <div>Oczekiwanie</div>;
};

export default Oczekiwanie;
