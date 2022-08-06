/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓

  type NameAndAge = [string, number];
  type Dog = {
    name: string,
    age: number,
    breed: 'BullDog' | 'GoldenRetriever'
  };
  type DogOwner = {
    name: string,
    age: number,
  };
  type DogOwnerAndDog = [Dog, DogOwner];
  type FirstPoint = {
    x: number,
    y: 3 | 5,
  };
  type SecondPoint = {
    x: 10 | 9,
    y: number,
  };
  type ThirdPoint = {
    x: number,
    y: 4 | 6,
  };
  type TriangleCordinates2D = [FirstPoint, SecondPoint, ThirdPoint];

  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    // sprendimo pavyzdžius spausdinkite čia
    const PersonNameAndAge: NameAndAge = ['juan', 27];

    console.log(`Vardas: ${PersonNameAndAge[0]} Amžius: ${PersonNameAndAge[1]}`);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    // sprendimo pavyzdžius spausdinkite čia
    const dogOwnerAndDog: DogOwnerAndDog = [{
      name: 'Smaugikas',
      age: 5,
      breed: 'BullDog',
    }, {
      name: 'Petras',
      age: 18,
    }];
    const print = (x: DogOwnerAndDog): string => `Savininko vardas: ${x[0]}\nŠuns Vardas: ${x[1]}`.replace(',', ' ');
    console.log(print(dogOwnerAndDog));
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    // sprendimo pavyzdžius spausdinkite čia
    const Triangle: TriangleCordinates2D = [{ x: 3, y: 5 }, { x: 10, y: 7 }, { x: 15, y: 4 }];
    const print = (shape: TriangleCordinates2D): string => {
      const trianglePoints = shape.map(({ x, y }) => `\nX cordinates: ${x}\nY cordinates: ${y}`);
      return `${trianglePoints}`.replaceAll(',', ' ');
    };
    console.log(print(Triangle));
  }
  console.groupEnd();
}
console.groupEnd();
