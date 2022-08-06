"use strict";
console.group('N.D darbai:');
const numbers = [1, 9, 8, 7, 11, 5, 10];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const printLastIndex = (a) => a.length - 1;
    console.log(printLastIndex(numbers));
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    const putIndexInLines = (a) => {
        const indexes = a.map((_num, index) => `\n${index}`);
        return `${indexes}`;
    };
    console.log(putIndexInLines(numbers));
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    const getValueOfArray = (a) => {
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
{
    const IndexAndValue = (array) => {
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
    const ReverseArr = (arr) => {
        const reversedArr = arr.reverse();
        return `${reversedArr.map((array) => `\n${array}`)}`;
    };
    console.log(ReverseArr(numbers));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const OneLineIndex = (arr) => {
        const arrToStr = arr.map((singleArr) => `${singleArr}`);
        const arrStrRemoveCommas = `${arrToStr}`.replaceAll(',', ' ');
        return arrStrRemoveCommas;
    };
    console.log(OneLineIndex(numbers));
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    const getValueOfArrInOneLine = (a) => {
        const valuesStr = a.map((value) => `${value}`);
        const finalResult = `${valuesStr}`.replaceAll(',', ' ');
        return finalResult;
    };
    console.log(getValueOfArrInOneLine(numbers));
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    const IndexAndValue = (array) => {
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
    const PowerOf2Array = (arr) => {
        const arrPoweredBy2 = arr.map((array) => array * 2);
        return arrPoweredBy2;
    };
    console.log(PowerOf2Array(numbers));
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    const arrSqRoot = (arr) => {
        const SqRootArr = arr.map((array) => array * array);
        return SqRootArr;
    };
    console.log(arrSqRoot(numbers));
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    const indexTimesValuesArr = (arr) => {
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
    const nums = [1, 5, -6, 10, -19, 35, -99];
    const FilterPositiveNums = (arr) => {
        const PositiveNums = arr.filter((num) => num > 0);
        return PositiveNums;
    };
    console.log(FilterPositiveNums(nums));
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const nums = [1, 5, -6, 10, -19, 35, -99];
    const FilterSickNegativeNums = (arr) => {
        const SickNegativeNums = arr.filter((num) => num < 0);
        return SickNegativeNums;
    };
    console.log(FilterSickNegativeNums(nums));
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const nums = [1, 5, -6, 10, -19, 35, -99];
    const FilterEvenNums = (arr) => {
        const EvenNums = arr.filter((num) => num % 2 === 0);
        return EvenNums;
    };
    console.log(FilterEvenNums(nums));
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const nums = [1, 5, -6, 10, -19, 35, -99];
    const FilterNotEvenNums = (arr) => {
        const EvilNotEvenNums = arr.filter((num) => num % 2 !== 0);
        return EvilNotEvenNums;
    };
    console.log(FilterNotEvenNums(nums));
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const nums = [1, 5, -6, 10, -19, 35, -99];
    const mixedValuesNums = (arr) => {
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
//# sourceMappingURL=TS-LessonTask.js.map