"use strict";
console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
    class Stack {
        static elementNotEmpty = (el) => el !== undefined;
        index;
        constructor() {
            this.index = -1;
        }
        get length() {
            return this.index + 1;
        }
        push(data) {
            this.index += 1;
            this[this.index] = data;
        }
        pop() {
            const lastElement = this[this.index];
            if (Stack.elementNotEmpty(lastElement)) {
                delete this[this.index];
                this.index -= 1;
                return lastElement;
            }
            return null;
        }
    }
    const numberStack = new Stack();
    const stringStack = new Stack();
    const numberArrayStack = new Stack();
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        console.log({
            numberStack,
            stringStack,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
    {
        numberStack.push(1);
        numberStack.push(7);
        numberStack.push(12);
        stringStack.push('Labas');
        stringStack.push('Vakaras');
        stringStack.push('Poniai');
        stringStack.push('ir');
        stringStack.push('Ponios');
        numberArrayStack.push([1]);
        numberArrayStack.push([2, 2, 2]);
        numberArrayStack.push([3, 5, 4]);
        console.log({
            numberStack,
            stringStack,
            numberArrayStack,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
    {
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack);
        console.log(stringStack.pop());
        console.log(stringStack.pop());
        console.log(stringStack.pop());
        console.log(stringStack.pop());
        console.log(stringStack.pop());
        console.log(stringStack.pop());
        console.log(stringStack.pop());
        console.log(stringStack);
        const removedValue = numberArrayStack.pop();
        console.log({ removedValue });
        console.log(numberArrayStack.pop());
        console.log(numberArrayStack.pop());
        console.log(numberArrayStack.pop());
        console.log(numberArrayStack.pop());
        console.log(numberArrayStack.pop());
        console.log(numberArrayStack.pop());
        console.log(numberArrayStack.pop());
        console.log(numberArrayStack);
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
        console.log(numberStack.length);
        numberStack.push(7);
        numberStack.push(7);
        console.log(numberStack.length);
        numberStack.pop();
        console.log(numberStack.length);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
    class Queue {
        index;
        constructor() {
            this.index = -1;
        }
        get length() {
            return this.index + 1;
        }
        enqueue(data) {
            for (let i = this.index; i >= 0; i -= 1) {
                this[i + 1] = this[i];
            }
            this[0] = data;
            this.index += 1;
        }
        pop() {
            const firstElement = this[0];
            for (let i = 1; i <= this.index; i += 1) {
                this[i - 1] = this[i];
            }
            delete this[this.index];
            this.index -= 1;
            return firstElement;
        }
    }
    const Test = new Queue();
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        console.log(Test);
    }
    console.groupEnd();
    console.group('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
        console.log(Test);
        Test.enqueue(66);
        Test.enqueue(98);
        Test.enqueue(89);
        Test.enqueue(85);
        Test.enqueue(80);
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
        Test.pop();
        console.log(Test);
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
        console.log(Test.length);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map