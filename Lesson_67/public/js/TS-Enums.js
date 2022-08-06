"use strict";
console.group('Enums - užduotys');
console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
{
    let LietuvosTop5LargestCities;
    (function (LietuvosTop5LargestCities) {
        LietuvosTop5LargestCities["Vilnius"] = "Vilnius";
        LietuvosTop5LargestCities["Kaunas"] = "Kaunas";
        LietuvosTop5LargestCities["Klaipeda"] = "Klaip\u0117da";
        LietuvosTop5LargestCities["\u0160iauliai"] = "\u0160iauliai";
        LietuvosTop5LargestCities["Panev\u0117\u017Eys"] = "Panev\u0117\u017Eys";
    })(LietuvosTop5LargestCities || (LietuvosTop5LargestCities = {}));
    console.log(LietuvosTop5LargestCities);
}
console.groupEnd();
console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
{
    let EuropeTop5Population;
    (function (EuropeTop5Population) {
        EuropeTop5Population[EuropeTop5Population["Russia"] = 0] = "Russia";
        EuropeTop5Population[EuropeTop5Population["Germany"] = 1] = "Germany";
        EuropeTop5Population[EuropeTop5Population["UK"] = 2] = "UK";
        EuropeTop5Population[EuropeTop5Population["France"] = 3] = "France";
        EuropeTop5Population[EuropeTop5Population["Italy"] = 4] = "Italy";
    })(EuropeTop5Population || (EuropeTop5Population = {}));
    console.log(EuropeTop5Population);
}
console.groupEnd();
console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
{
    let Top5EuropeGDP;
    (function (Top5EuropeGDP) {
        Top5EuropeGDP[Top5EuropeGDP["Germany"] = 1] = "Germany";
        Top5EuropeGDP[Top5EuropeGDP["UK"] = 2] = "UK";
        Top5EuropeGDP[Top5EuropeGDP["France"] = 3] = "France";
        Top5EuropeGDP[Top5EuropeGDP["Italy"] = 4] = "Italy";
        Top5EuropeGDP[Top5EuropeGDP["Russia"] = 5] = "Russia";
    })(Top5EuropeGDP || (Top5EuropeGDP = {}));
    console.log(Top5EuropeGDP);
}
console.groupEnd();
console.groupEnd();
//# sourceMappingURL=TS-Enums.js.map