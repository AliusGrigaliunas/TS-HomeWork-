/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
//  Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Union operators - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓

  type Accommodation = {
    type: 'House' | 'Flat',
  };
  type Car = {

    transmission: 'Automatic' | 'Manual';
  };
  type CarOrAcommadation = [Car | Accommodation];

  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
  {
    // sprendimo pavyzdžius spausdinkite čia
    const PlaceToSurviveComfy: Accommodation = {
      type: 'House',
    };
    const PlaceToSurviveComfy2: Accommodation = {
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
    // sprendimo pavyzdžius spausdinkite čia
    const car1: Car = { transmission: 'Automatic' };
    const car2: Car = { transmission: 'Manual' };
    console.log(car1, car2);
  }
  console.groupEnd();

  console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
  {
    // sprendimo pavyzdžius spausdinkite čia
    const choseAcommadation: CarOrAcommadation = [{ transmission: 'Automatic' }];
    const choseType: CarOrAcommadation = [{ type: 'Flat' }];

    console.log(choseAcommadation, choseType);
  }
  console.groupEnd();
}
console.groupEnd();
