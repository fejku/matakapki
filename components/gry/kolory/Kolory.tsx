import { useState } from "react";
import Poczatek from "./Poczatek";
import Wybor from "./Wybor";
import Wynik from "./Wynik";

export enum STAN {
  POCZATEK,
  WYBOR,
  WYNIK,
}

interface Props {}

const Kolory: React.FC<Props> = () => {
  const [stan, setStan] = useState(STAN.POCZATEK);
  const [wynik, setWynik] = useState(0);

  switch (stan) {
    case STAN.POCZATEK:
      return <Poczatek setStan={setStan} setWynik={setWynik} />;
    case STAN.WYBOR:
      return <Wybor setStan={setStan} wynik={wynik} setWynik={setWynik} />;
    case STAN.WYNIK:
      return <Wynik setStan={setStan} wynik={wynik} />;
  }
};

export default Kolory;
