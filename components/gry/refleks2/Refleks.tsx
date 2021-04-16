import { useState } from "react";
import Gra from "./gra/Gra";
import Oczekiwanie from "./oczekiwanie/Oczekiwanie";
import Poczatek from "./poczatek/Poczatek";

export enum STAN {
  POCZATEK,
  OCZEKIWANIE,
  GRA,
}

interface Props {}

const Refleks: React.FC<Props> = () => {
  const [stan, setStan] = useState(STAN.POCZATEK);
  const [wynik, setWynik] = useState(0);

  switch (stan) {
    case STAN.POCZATEK:
      return <Poczatek setStan={setStan} setWynik={setWynik} />;
    case STAN.OCZEKIWANIE:
      return <Oczekiwanie setStan={setStan} wynik={wynik} />;
    case STAN.GRA:
      return <Gra setStan={setStan} wynik={wynik} setWynik={setWynik} />;
  }
};

export default Refleks;
