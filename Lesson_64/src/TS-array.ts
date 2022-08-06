type Students = {
  id:string,
  name: string,
  surname: string,
  age: Number,
  employed: boolean,
  weight?:number,
  height?:number
};
const names: Array<string> = ['Karol', 'Kipras', 'Bratolijus The Wise', 'Doc Nox'];
const students: Students[] = [
  {
    id: '39304075689',
    name: 'Alius',
    surname: 'Grigaliūnas',
    age: 23,
    employed: false,
    weight: 72,
    height: 187,
  }, {
    id: '39304075689',
    name: 'Olandas',
    surname: 'Nyderauskas',
    age: 24,
    employed: true,
    height: 185,
  }, {
    id: '39304075689',
    name: 'Nicolas',
    surname: 'Ingenting',
    age: 31,
    employed: false,
  }, {
    id: '57235454287',
    name: 'Simba',
    surname: 'Liutauskas',
    age: 16,
    employed: false,
  },
];

// type CreateStudentsArrayFunction = (s1: Student, s2: Student) => Student[];

const printStrings = (strings: string[]): void => {
  const printString = (str: string): void => console.log(str);

  strings.forEach(printString);
};

printStrings(names);

students.forEach(((singleStudent) => console.log(singleStudent)));

console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');

const numbers: number[] = [1, -8, -6, 7, 5, 1];

function addPositiveNumbers(arr: number[]) {
  const positiveNumberReducer = (sum:number, num:number) => (num > 0 ? sum + num : sum);

  return arr.reduce(positiveNumberReducer, 0);
}

console.log({
  numbers,
  sumOfPositiveNumbers: addPositiveNumbers(numbers),
});
console.groupEnd();

console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');

/*
    Pvz.:
     * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
     * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
     * ['Loughing', 'Out', 'Loud'] -> LOL
  */

const words: string[] = ['Labas', 'Rytas', 'Televizija'];

console.log(words);

function FirstLetterWords(Words:string[]):string {
  const anagram = Words.map((word) => word[0]).join('');
  return anagram;
}

console.log(FirstLetterWords(words));

console.groupEnd();

console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');

/*
      Pvz.:
       * [1, 7, 8] -> 56
       * [98, 74, 5, 0] -> 0
       * [17, 10, 5] -> 850
    */

const nums: number[] = [1, 7, 8];

function calc(num: number[]): number {
  const a = num.reduce((prev: number, currentNumber: number) => prev * currentNumber);
  return a;
}

console.log(calc(nums));

console.groupEnd();
