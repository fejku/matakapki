import { CSSProperties } from "react";

const wylosujLiczbe = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};

const wylosujKolor = () => {
  const litery = "0123456789ABCDE";
  let kolor = "#";

  for (let i = 0; i < 6; i++) {
    kolor += litery[Math.floor(Math.random() * litery.length)];
  }

  return kolor;
};

export const wylosujStyl = () => {
  const wynik: CSSProperties = {};

  if (Math.random() < 0.5) {
    wynik.top = `${wylosujLiczbe(50)}vh`;
  } else {
    wynik.bottom = `${wylosujLiczbe(50)}vh`;
  }

  if (Math.random() < 0.5) {
    wynik.left = `${wylosujLiczbe(50)}vw`;
  } else {
    wynik.right = `${wylosujLiczbe(50)}vw`;
  }

  if (Math.random() < 0.5) {
    wynik.borderRadius = "50%";
  }

  wynik.backgroundColor = wylosujKolor();

  return wynik;
};
