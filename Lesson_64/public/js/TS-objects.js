"use strict";
const student1 = {
    id: '39304075689',
    name: 'Alius',
    surname: 'Grigaliūnas',
    age: 23,
    employed: false,
    weight: 72,
    height: 187,
};
const student2 = {
    id: '39304075689',
    name: 'Olandas',
    surname: 'Nyderauskas',
    age: 24,
    employed: true,
    height: 185,
};
const student3 = {
    id: '39304075689',
    name: 'Nicolas',
    surname: 'Ingenting',
    age: 31,
    employed: false,
};
const student4 = {
    id: '57235454287',
    name: 'Simba',
    surname: 'Liutauskas',
    age: 16,
    employed: false,
};
const createFullname = ({ name, surname }) => `${name} ${surname}`;
const broship = (bro1, bro2) => {
    const bro1FullName = createFullname(bro1);
    const bro2FullName = createFullname(bro2);
    console.log(`${bro1FullName} is good bros with ${bro2FullName}`);
};
broship(student2, student3);
console.group('1. Sukurkite funkciją kuri patikrina ar žmogus yra pilnametis');
const IsAdult = (student) => {
    const studentAge = student.age;
    if (studentAge > 18) {
        return 'is an adult';
    }
    return 'is not an adult';
};
console.log({
    [createFullname(student1)]: IsAdult(student1),
    [createFullname(student2)]: IsAdult(student2),
    [createFullname(student3)]: IsAdult(student3),
    [createFullname(student4)]: IsAdult(student4),
});
console.groupEnd();
console.group('2. Sukurkite funkciją, kuri patikrina ar Person tipo objektas turi ūgį ir svorį');
const isFullyDescribedPerson = (student) => {
    const studentHeight = student.height;
    const studentWeight = student.weight;
    if (studentHeight === undefined) {
        return 'has no body';
    }
    if (studentWeight === undefined) {
        return 'has no body';
    }
    return 'I have da body';
};
isFullyDescribedPerson(student1);
console.log({
    [createFullname(student1)]: isFullyDescribedPerson(student1),
    [createFullname(student2)]: isFullyDescribedPerson(student2),
    [createFullname(student3)]: isFullyDescribedPerson(student3),
    [createFullname(student4)]: isFullyDescribedPerson(student4),
});
console.groupEnd();
console.group('3. Sukurkite funkciją, kuri grąžina žmogaus incialus');
const getInitials = (student) => {
    const initials = student.id;
    return `${initials}`;
};
console.log({
    [createFullname(student1)]: getInitials(student1),
    [createFullname(student2)]: getInitials(student2),
    [createFullname(student3)]: getInitials(student3),
});
console.groupEnd();
//# sourceMappingURL=TS-objects.js.map