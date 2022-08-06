"use strict";
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const PersonNameAndAge = ['juan', 27];
        console.log(`Vardas: ${PersonNameAndAge[0]} Amžius: ${PersonNameAndAge[1]}`);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const dogOwnerAndDog = [{
                name: 'Smaugikas',
                age: 5,
                breed: 'BullDog',
            }, {
                name: 'Petras',
                age: 18,
            }];
        const print = (x) => `Savininko vardas: ${x[0]}\nŠuns Vardas: ${x[1]}`.replace(',', ' ');
        console.log(print(dogOwnerAndDog));
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const Triangle = [{ x: 3, y: 5 }, { x: 10, y: 7 }, { x: 15, y: 4 }];
        const print = (shape) => {
            const trianglePoints = shape.map(({ x, y }) => `\nX cordinates: ${x}\nY cordinates: ${y}`);
            return `${trianglePoints}`.replaceAll(',', ' ');
        };
        console.log(print(Triangle));
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=TS-Tuples.js.map