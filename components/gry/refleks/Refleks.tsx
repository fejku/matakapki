import { useState } from "react";
import Gra from "./gra/Gra";
import Oczekiwanie from "./oczekiwanie/Oczekiwanie";
import Poczatek from "./poczatek/Poczatek";
import Wynik from "./wynik/Wynik";

export enum STAN {
  POCZATEK,
  OCZEKIWANIE,
  GRA,
  WYNIK,
}

interface Props {}

const Refleks: React.FC<Props> = () => {
  const [stan, setStan] = useState(STAN.POCZATEK);
  const [wynik, setWynik] = useState(0);

  switch (stan) {
    case STAN.POCZATEK:
      return <Poczatek setStan={setStan} />;
    case STAN.OCZEKIWANIE:
      return <Oczekiwanie setStan={setStan} setWynik={setWynik} />;
    case STAN.GRA:
      return <Gra setStan={setStan} setWynik={setWynik} />;
    case STAN.WYNIK:
      return <Wynik setStan={setStan} wynik={wynik} />;
  }
};

export default Refleks;
