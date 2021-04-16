export interface Kolor {
  kolor: string;
  nazwa: string;
}

const listaKolorow: Kolor[] = [
  { kolor: "red", nazwa: "Czerwony" },
  { kolor: "green", nazwa: "Zielony" },
  { kolor: "blue", nazwa: "Niebieski" },
  { kolor: "violet", nazwa: "Fioletowy" },
  { kolor: "black", nazwa: "Czarny" },
];

export const wylosujKolor = (poprzedniKolor: Kolor = null) => {
  let kolorIndex: number;

  do {
    kolorIndex = Math.floor(Math.random() * listaKolorow.length);
  } while (poprzedniKolor && poprzedniKolor.nazwa === listaKolorow[kolorIndex].nazwa);

  return listaKolorow[kolorIndex];
};

export const wylosujDrugiKolor = (kolor: Kolor) => {
  return Math.random() < 0.5 ? kolor : wylosujKolor();
};
