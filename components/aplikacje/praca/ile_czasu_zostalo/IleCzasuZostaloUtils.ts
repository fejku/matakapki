const zamienCzasNaMinuty = (czas: string) => {
  if (czas) {
    const [czasGodzina, czasMinuty] = czas.split(":");
    return parseInt(czasGodzina) * 60 + parseInt(czasMinuty);
  }
  return 0;
};

const podajIloscMinutDlaPrzerwy = (czyPrzerwa: boolean, przerwaPoczatek: string, przerwaKoniec: string) => {
  if (czyPrzerwa && przerwaPoczatek && przerwaKoniec) {
    const iloscMinutPoczatekPrzerwy = zamienCzasNaMinuty(przerwaPoczatek);
    const iloscMinutKoniecPrzerwy = zamienCzasNaMinuty(przerwaKoniec);

    return iloscMinutKoniecPrzerwy - iloscMinutPoczatekPrzerwy;
  }
  return 0;
};

const formatujMinutyNaCzas = (minuty: number) => {
  const wynikGodzina = Math.floor(minuty / 60);
  const wynikGodzinaSformatowana = wynikGodzina < 10 ? `0${wynikGodzina}` : wynikGodzina.toString();

  const wynikMinuty = minuty % 60;

  return `${wynikGodzinaSformatowana}:${wynikMinuty}`;
};

export const wyznaczCzas = (
  poczatek: string,
  czasPracy: string,
  czyPrzerwa: boolean,
  przerwaPoczatek: string,
  przerwaKoniec: string
) => {
  if (poczatek) {
    const wynikWMinutach =
      zamienCzasNaMinuty(czasPracy) +
      zamienCzasNaMinuty(poczatek) +
      podajIloscMinutDlaPrzerwy(czyPrzerwa, przerwaPoczatek, przerwaKoniec);

    const sformatowanyCzas = formatujMinutyNaCzas(wynikWMinutach);
    return `Koniec ${sformatowanyCzas}`;
  }
  return "Nie podonano godziny rozpoczęcia";
};
