"use strict";
console.group('Union operators - užduotys');
{
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const PlaceToSurviveComfy = {
            type: 'House',
        };
        const PlaceToSurviveComfy2 = {
            type: 'Flat',
        };
        console.log({
            firstPlace: PlaceToSurviveComfy.type,
            SecondPlace: PlaceToSurviveComfy2.type,
        });
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const car1 = { transmission: 'Automatic' };
        const car2 = { transmission: 'Manual' };
        console.log(car1, car2);
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const choseAcommadation = [{ transmission: 'Automatic' }];
        const choseType = [{ type: 'Flat' }];
        console.log(choseAcommadation, choseType);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=TS-Union-Operators.js.map