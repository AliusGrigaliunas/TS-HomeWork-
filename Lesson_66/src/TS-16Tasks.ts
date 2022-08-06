/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

console.group('N.D darbai:');

const numbers: number[] = [1, 9, 8, 7, 11, 5, 10];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

  const printLastIndex = (a: number[]): number => a.length - 1;
  console.log(printLastIndex(numbers));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  const putIndexInLines = (a: number[]): string => {
    const indexes = a.map((_num, index) => `\n${index}`);
    return `${indexes}`;
  };
  console.log(putIndexInLines(numbers));
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const getValueOfArray = (a: number[]): string => {
    const values = a.map((value) => {
      const valueInStr = `\n${value}`;
      return valueInStr;
    });
    return `${values}`;
  };
  console.log(getValueOfArray(numbers));
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const IndexAndValue = (array: number[]): string => {
    const b = array.map((x) => {
      const index = array.indexOf(x);
      const IndexValueStr = `\n[${index}] => ${x}`;
      return IndexValueStr;
    });
    return `${b}`;
  };

  console.log(IndexAndValue(numbers));
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const ReverseArr = (arr: number[]): string => {
    const reversedArr = arr.reverse();
    return `${reversedArr.map((array) => `\n${array}`)}`;
  };
  console.log(ReverseArr(numbers));
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const OneLineIndex = (arr: number[]): string => {
    const arrToStr = arr.map((singleArr) => `${singleArr}`);
    const arrStrRemoveCommas = `${arrToStr}`.replaceAll(',', ' ');
    return arrStrRemoveCommas;
  };
  console.log(OneLineIndex(numbers));
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  const getValueOfArrInOneLine = (a: number[]): string => {
    const valuesStr = a.map((value) => `${value}`);
    const finalResult = `${valuesStr}`.replaceAll(',', ' ');
    return finalResult;
  };
  console.log(getValueOfArrInOneLine(numbers));
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const IndexAndValue = (array: number[]): string => {
    const b = array.map((x) => {
      const index = array.indexOf(x);
      const IndexValueStr = `[${index}]=>${x}`;
      return IndexValueStr;
    });
    return `${b}`.replaceAll(',', ', ');
  };

  console.log(IndexAndValue(numbers));
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const PowerOf2Array = (arr: number[]): number[] => {
    const arrPoweredBy2 = arr.map((array) => array * 2);
    return arrPoweredBy2;
  };
  console.log(PowerOf2Array(numbers));
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const arrSqRoot = (arr: number[]): number[] => {
    const SqRootArr = arr.map((array) => array * array);
    return SqRootArr;
  };
  console.log(arrSqRoot(numbers));
}
console.groupEnd();

type Numbers = (arr: number[]) => number[];

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const indexTimesValuesArr: Numbers = (arr) => {
    const index = arr.map((x) => {
      const Index = arr.indexOf(x);
      const combinedNewArr = arr[Index] * Index;
      return combinedNewArr;
    });
    return index;
  };
  console.log(indexTimesValuesArr(numbers));
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const nums: number[] = [1, 5, -6, 10, -19, 35, -99];
  const FilterPositiveNums: Numbers = (arr) => {
    const PositiveNums = arr.filter((num) => num > 0);
    return PositiveNums;
  };
  console.log(FilterPositiveNums(nums));
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const nums: number[] = [1, 5, -6, 10, -19, 35, -99];
  const FilterSickNegativeNums: Numbers = (arr) => {
    const SickNegativeNums = arr.filter((num) => num < 0);
    return SickNegativeNums;
  };
  console.log(FilterSickNegativeNums(nums));
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const nums: number[] = [1, 5, -6, 10, -19, 35, -99];
  const FilterEvenNums: Numbers = (arr) => {
    const EvenNums = arr.filter((num) => num % 2 === 0);
    return EvenNums;
  };
  console.log(FilterEvenNums(nums));
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const nums: number[] = [1, 5, -6, 10, -19, 35, -99];
  const FilterNotEvenNums: Numbers = (arr) => {
    const EvilNotEvenNums = arr.filter((num) => num % 2 !== 0);
    return EvilNotEvenNums;
  };
  console.log(FilterNotEvenNums(nums));
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const nums: number[] = [1, 5, -6, 10, -19, 35, -99];
  const mixedValuesNums: Numbers = (arr) => {
    const NegNums = arr.filter((x) => x < 0);
    const NegToPosNum = NegNums.map((NegNum) => NegNum * -1);
    const PosNums = arr.filter((x) => x > 0);
    const newArr = NegToPosNum.concat(PosNums);
    return newArr;
  };
  console.log(mixedValuesNums(nums));
}
console.groupEnd();

console.groupEnd();
