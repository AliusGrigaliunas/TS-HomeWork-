/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Berlin = 'Berlin';
  type Hamburg = 'Hamburg';
  type Munich = 'Munich';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt';
  type GermaniesFiveBiggestCities = Berlin | Hamburg | Munich | Cologne | Frankfurt;

  type GoldenRetriever = 'GoldenRetriever';
  type FrenchBulldog = 'FrenchBulldog';
  type LabradorRetriever = 'LabradorRetriever';
  type GermanShepard = 'GermanShepard';
  type Poodles = 'Poodles';
  type FiveBreeds = GoldenRetriever | FrenchBulldog | LabradorRetriever | GermanShepard | Poodles;

  type Bonnet = 'Bonnet';
  type Bumper = 'Bumper';
  type CowlScreen = 'Cowl screen';
  type Decklid = 'Decklid';
  type Fender = 'Fender';
  type FiveCarParts = Bonnet | Bumper | CowlScreen | Decklid | Fender;

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia

    type Contries = {
      city1: GermaniesFiveBiggestCities,
      city2: GermaniesFiveBiggestCities,
      city3: GermaniesFiveBiggestCities,
      city4: GermaniesFiveBiggestCities,
      city5: GermaniesFiveBiggestCities
    };

    const GermanCities: Contries = {
      city1: 'Berlin',
      city2: 'Hamburg',
      city3: 'Munich',
      city4: 'Cologne',
      city5: 'Frankfurt',
    };

    console.log(GermanCities);
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia

    type Breeds = {
      breed1: FiveBreeds,
      breed2: FiveBreeds,
      breed3: FiveBreeds,
      breed4: FiveBreeds,
      breed5: FiveBreeds
    };

    const TopFiveBreeds: Breeds = {
      breed1: 'GoldenRetriever',
      breed2: 'FrenchBulldog',
      breed3: 'LabradorRetriever',
      breed4: 'GermanShepard',
      breed5: 'Poodles',
    };

    console.log(TopFiveBreeds);
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia

    type Parts = {
      part1: FiveCarParts,
      part2: FiveCarParts,
      part3: FiveCarParts,
      part4: FiveCarParts,
      part5: FiveCarParts
    };

    const TopFiveParts: Parts = {
      part1: 'Bonnet',
      part2: 'Bumper',
      part3: 'Cowl screen',
      part4: 'Decklid',
      part5: 'Fender',
    };
    console.log(TopFiveParts);
  }
  console.groupEnd();
}
console.groupEnd();
