export const zamienCzasNaMinuty = (czas: string) => {
  if (czas) {
    const [czasGodzina, czasMinuty] = czas.split(":");
    return parseInt(czasGodzina) * 60 + parseInt(czasMinuty);
  }
  return 0;
};

export const podajIloscMinutDlaPrzerwy = (czyPrzerwa: boolean, przerwaPoczatek: string, przerwaKoniec: string) => {
  if (czyPrzerwa && przerwaPoczatek && przerwaKoniec) {
    const iloscMinutPoczatekPrzerwy = zamienCzasNaMinuty(przerwaPoczatek);
    const iloscMinutKoniecPrzerwy = zamienCzasNaMinuty(przerwaKoniec);

    return iloscMinutKoniecPrzerwy - iloscMinutPoczatekPrzerwy;
  }
  return 0;
};

export const formatujMinutyNaCzas = (minuty: number) => {
  const wynikGodzina = Math.floor(minuty / 60);
  const wynikGodzinaSformatowana = wynikGodzina < 10 ? `0${wynikGodzina}` : wynikGodzina.toString();

  const wynikMinuty = minuty % 60;

  return `${wynikGodzinaSformatowana}:${wynikMinuty}`;
};
