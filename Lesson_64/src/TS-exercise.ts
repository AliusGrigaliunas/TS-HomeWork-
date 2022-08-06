/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */

console.group('Drinks sorter:');
{
type Drink = {
  drink: string,
  price: number
};

const drinks: Drink[] = [{
  drink: 'Vodke',
  price: 8.5,
}, {
  drink: 'Whiskey',
  price: 12,
}, {
  drink: 'Liquor',
  price: 16,
}, {
  drink: 'Beer',
  price: 100,
}];

const sortArr = (ArrInObj: Drink[]) => {
  const sortPrice = ArrInObj.sort((a, b): number => a.price - b.price);
  return sortPrice;
};

console.log(sortArr(drinks));
}
console.groupEnd();

console.group('Burglary Series (04): Add its Name');

{
  const obj = {};
  type Objective = (o : object, n: string, v: number) => Object;
  const addName :Objective = (obj1, name, value) => Object.assign(obj1, { [`${name}`]: value });

  console.log(addName(obj, 'Diccus', 150));
  console.log(addName({ Biggus: 150 }, 'Diccus', 150));
}

console.groupEnd();
