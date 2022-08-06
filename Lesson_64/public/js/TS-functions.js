"use strict";
console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
    const number1 = 1;
    const number9 = 9;
    const multiply = (num1, num2) => num1 * num2;
    const unlimitedPowah = (base, num) => base ** num;
    const fourWallBoxRoot = (number) => number ** (1 / 2);
    const root = (base, nthroot) => base * (1 / nthroot);
    console.log({
        [`Multi(${number1},${number9})`]: multiply(number1, number9),
        [`unlimitedPowah(${number1},${number9})`]: unlimitedPowah(number1, number9),
        [`fourWallBoxRoot(${number1})`]: fourWallBoxRoot(number9),
        [`root(${number1},${number9})`]: root(number1, number9),
    });
}
console.groupEnd();
console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
{
    const multiply = (num1, num2) => num1 * num2;
    const unlimitedPowah = (base, num) => base ** num;
    const fourWallBoxRoot = (number) => number ** (1 / 2);
    const root = (base, nthroot) => base * (1 / nthroot);
    const printTheChronicle = (text) => console.log(text);
    const number1 = 1;
    const number9 = 9;
    console.log({
        [`Multi(${number1},${number9})`]: multiply(number1, number9),
        [`unlimitedPowah(${number1},${number9})`]: unlimitedPowah(number1, number9),
        [`fourWallBoxRoot(${number1})`]: fourWallBoxRoot(number9),
        [`root(${number1},${number9})`]: root(number1, number9),
    });
    printTheChronicle('The chronicle of numbahs');
}
console.groupEnd();
//# sourceMappingURL=TS-functions.js.map