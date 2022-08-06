"use strict";
const names = ['Karol', 'Kipras', 'Bratolijus The Wise', 'Doc Nox'];
const students = [
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
const printStrings = (strings) => {
    const printString = (str) => console.log(str);
    strings.forEach(printString);
};
printStrings(names);
students.forEach(((singleStudent) => console.log(singleStudent)));
console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
const numbers = [1, -8, -6, 7, 5, 1];
function addPositiveNumbers(arr) {
    const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
    return arr.reduce(positiveNumberReducer, 0);
}
console.log({
    numbers,
    sumOfPositiveNumbers: addPositiveNumbers(numbers),
});
console.groupEnd();
console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
const words = ['Labas', 'Rytas', 'Televizija'];
console.log(words);
function FirstLetterWords(Words) {
    const anagram = Words.map((word) => word[0]).join('');
    return anagram;
}
console.log(FirstLetterWords(words));
console.groupEnd();
console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
const nums = [1, 7, 8];
function calc(num) {
    const a = num.reduce((prev, currentNumber) => prev * currentNumber);
    return a;
}
console.log(calc(nums));
console.groupEnd();
//# sourceMappingURL=TS-array.js.map