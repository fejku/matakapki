const MINIMALNY_CZAS = 1000;

export const wylosujCzasOczekiwaniaMs = (maxCzas: number) => {
  return Math.floor(Math.random() * maxCzas) + MINIMALNY_CZAS;
};
