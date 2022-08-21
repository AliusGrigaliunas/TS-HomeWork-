type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const strings: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
const booleans: boolean[] = [true, true, true, true, false];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // Sprendimas ir rezultatų spausdinimas

  const fruits = ['Apple','banna','pinapple','Jerry'];

  const selectFirstArrElement = <Type>(arr: Type[]): Type => arr[0];

  const results = selectFirstArrElement(fruits);

  console.log(results);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // Sprendimas ir rezultatų spausdinimas

  const cars = ['BMW','Opel','Volkswagen','Mercades','Audi'];

  const getLastElementFromArr = <Type>(arr: Type[]):Type => arr[arr.length - 1];

  const results = getLastElementFromArr(cars);

  console.log(results);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  // Sprendimas ir rezultatų spausdinimas

  const mix: PrimitiveType[] = [125,'open',true,'firearms',1994,false,'callme']

  const pickType = <T extends PrimitiveType>(arr:T[], key:T):T[]=>{
    const copiedArr = [...arr];
    const booleanValue:T[] = copiedArr.filter((element) => typeof element === key.toString());

    return booleanValue;
  }


  const copy = <T extends PrimitiveType>(arr:T[]):T[]=>{
    return arr.map(x=>x);
  }

  console.log(mix);

  const results = pickType(mix,'string');
  const results2 = pickType(mix,'boolean');
  const resultsWithCopy = copy(numbers);

  console.log(results);
  console.log(results2);
  console.log(resultsWithCopy);
  
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  const RepeatFunc = <Type extends PrimitiveType>(element: Type,num: number):Type[] =>{
    return Array(num).fill(element);
  } 

  const results1 = RepeatFunc('a',2);
  const results2 =  RepeatFunc(77,5);
  const results3 = RepeatFunc(true,9);

  console.log({
    one: results1,
    two: results2,
    three: results3,
  })

  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  // Sprendimas ir rezultatų spausdinimas
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  // Sprendimas ir rezultatų spausdinimas
  const solution = <T>(arr1:T[],arr2:T[]):T[] =>{
    return [...arr1,...arr2];
  }

  const oneArrNumber = [7,9,10];
  const twoArrNumber = [15,75,69];

  const resultsNumber = solution(oneArrNumber,twoArrNumber);

  const oneArrString = ['55','HOLA','they call me by...Tim..'];
  const twoArrString = ['caterpillar','OSRS','Yknow, I was an amazing man once'];

  const resultsString = solution(oneArrString, twoArrString);

  console.log({
    WithNumbers: resultsNumber,
    WithString: resultsString,
  })
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei gauti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  // Sprendimas ir rezultatų spausdinimas
  type IncapsulatedValueObject<Type> = {
    setValue: (newValue: Type) => void,
    getValue: () => Type
  };


  const solution = <Type>(initialValue: Type): IncapsulatedValueObject<Type> => {
    let value: Type = initialValue;

    return {
      setValue: (newValue) => value = newValue,
      getValue: () => value,
    }
  }

  // Spausdinimas
  const value1: number = 7;
  const value2: Array<string> = ["Sidnius", "Mauricijus", "Penktasis"];
  const value3: { name: string, surname: string } = { name: 'Fanatijus', surname: 'Labdara' };

  const obj1 = solution(value1);
  const obj2 = solution(value2);
  const obj3 = solution(value3);

  console.log('initial values');
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  })
  console.log('changing values...');
  obj1.setValue(9);
  obj2.setValue(['Pakeista']);
  obj3.setValue({ name: 'Pakaitalas', surname: 'Fuflo' });
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  })

  console.log(obj1.getValue());
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`
);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  type groupedPeople = {
    students: Student[],
    workers: Worker[],
    people:Person[],
  }

  const isStudent = (person:Person):person is Student =>{
    return (person as Student).university !== undefined;
  }

  const isWorker = (person:Person):person is Worker => {
    return (person as Worker).avgMonthlyPay !== undefined;
  }

  const solution = (ppl: Person[]):groupedPeople =>{

    const newGroup = ppl.reduce<groupedPeople>((prevGroup,person)=>
    {
      const CopiedArrPpl = {...prevGroup};
      if(isStudent(person)) CopiedArrPpl.students.push(person); 
      if(isWorker(person)) CopiedArrPpl.workers.push(person);
      if(isStudent(person) && isWorker(person) !== true) CopiedArrPpl.people.push(person)

      return CopiedArrPpl;
    },{
      people:[],
      students: [],
      workers: [],
    })

    return newGroup;
  }

  const people: (Person | Student | Worker)[] = [
    { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
  ];

  const results = solution(people);

  console.log(results);

  const students = isStudent(people[1]);

  console.log(students);
}