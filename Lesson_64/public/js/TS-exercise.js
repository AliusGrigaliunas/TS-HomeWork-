"use strict";
console.group('Drinks sorter:');
{
    const drinks = [{
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
    const sortArr = (ArrInObj) => {
        const sortPrice = ArrInObj.sort((a, b) => a.price - b.price);
        return sortPrice;
    };
    console.log(sortArr(drinks));
}
console.groupEnd();
console.group('Burglary Series (04): Add its Name');
{
    const obj = {};
    const addName = (obj1, name, value) => Object.assign(obj1, { [`${name}`]: value });
    console.log(addName(obj, 'Diccus', 150));
    console.log(addName({ Biggus: 150 }, 'Diccus', 150));
}
console.groupEnd();
//# sourceMappingURL=TS-exercise.js.map