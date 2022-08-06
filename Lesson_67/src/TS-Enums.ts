/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
console.group('Enums - užduotys');

console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
{
  // sprendimą|sprendimo pavyzdžius spausdinkite čia
  enum LietuvosTop5LargestCities {
    Vilnius = 'Vilnius',
    Kaunas = 'Kaunas',
    Klaipeda = 'Klaipėda',
    Šiauliai = 'Šiauliai',
    Panevėžys = 'Panevėžys',
  }

  console.log(LietuvosTop5LargestCities);
}
console.groupEnd();

console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
{
  // sprendimą|sprendimo pavyzdžius spausdinkite čia
  enum EuropeTop5Population {
    Russia,
    Germany,
    UK,
    France,
    Italy,
  }

  console.log(EuropeTop5Population);
}
console.groupEnd();

console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
{
  // sprendimą|sprendimo pavyzdžius spausdinkite čia
  enum Top5EuropeGDP {
    Germany = 1,
    UK,
    France,
    Italy,
    Russia,
  }

  console.log(Top5EuropeGDP);
}
console.groupEnd();

console.groupEnd();
