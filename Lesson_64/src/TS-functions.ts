/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */

console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
  const number1 = 1;
  const number9 = 9;

  const multiply = (num1: number, num2: number): number => num1 * num2;

  const unlimitedPowah = (base: number, num: number): number => base ** num;

  const fourWallBoxRoot = (number: number): number => number ** (1 / 2);

  const root = (base: number, nthroot: number): number => base * (1 / nthroot);

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
  type DaNumbahs = (num1:number, num2:number) => number;

  type DaNumbah = (num1: number) => number;

  type DaChronicle = (text: string) => void;

  const multiply: DaNumbahs = (num1, num2) => num1 * num2;

  const unlimitedPowah: DaNumbahs = (base, num) => base ** num;

  const fourWallBoxRoot: DaNumbah = (number) => number ** (1 / 2);

  const root: DaNumbahs = (base, nthroot) => base * (1 / nthroot);

  const printTheChronicle: DaChronicle = (text) => console.log(text);

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
