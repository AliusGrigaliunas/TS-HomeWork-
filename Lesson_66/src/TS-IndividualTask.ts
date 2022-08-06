/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:
  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.
  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?
  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.
    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.
  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 10 min - 8:45(finished them at 8:30);
console.groupCollapsed('Paskaitos užduotys: ');

console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  const ToUpperCase = (text: string): string => text.toUpperCase();

  console.log(ToUpperCase('Čia yra didžiosios raidės'));
}
console.groupEnd();

// 10 min - 8:55(finished them at 8:35)
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  const CombinedSimbolsNum = (text: string, text2: string): number => text.split('').length + text2.split('').length;

  console.log(CombinedSimbolsNum('Labas', 'Vakaras'));
}
console.groupEnd();

// 10 min - 9:15(finished them at 8:57)
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
  const CheckStrForLett = (word: string, letter: string) => word.includes(letter);
  console.log(CheckStrForLett('Labas', 'e'));
}
console.groupEnd();

// 10 min (finished at 9:12);
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const CheckStrSimbEqualNum = (str: string): boolean => { if (str.split('').length % 2 !== 0) { return false; } return true; };

  console.log(CheckStrSimbEqualNum('Labap'));
}
console.groupEnd();

// 15 min (finished at 9:24)
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  const checkStrIfVowels = (str: string) => {
    const HasVowels = str.match(/[AaĄaEeĘęĖėIiĮįYyOoUuŲųŪū]/ig);
    return HasVowels?.length;
  };

  console.log(checkStrIfVowels('Labas'));
}
console.groupEnd();

// 15 min (finished at 9:35)
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
  const CheckSimbolInStrNum = (word: string, lett: string) => {
    const lettCount = word.match(new RegExp(lett, 'g'))?.length;
    return lettCount;
  };

  console.log(CheckSimbolInStrNum('Fool', 'o'));
}
console.groupEnd();

// 15 min (finished at 9:55)
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
  const RemoveSimbolFromStr = (str: string, lett: string) => {
    const replacedLettStr = str.replace(str.split('')[0], lett);
    return replacedLettStr;
  };

  console.log(RemoveSimbolFromStr('Nick', 'R'));
}
console.groupEnd();

// 20 min (finished at 11:20)
//  7. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
  const ReplaceStrWithStr = (str1: string, strLett: string): string => {
    const StrArr = strLett.split('');
    return StrArr.reduce((prevLett, currLett) => prevLett.replaceAll(currLett, ''), str1);
  };

  const newWord = ReplaceStrWithStr('Labass', 'ass');
  console.log(newWord);
}
console.groupEnd();

// 60 min
// 8. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{

}
console.groupEnd();

console.groupEnd();
