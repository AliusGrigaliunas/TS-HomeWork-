"use strict";
console.group('Assertions - užduotys');
const button = document.querySelector('#button');
const textBox = document.querySelector('#textBox');
const MotherBox = document.querySelector('#MotherBox');
console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
{
    button.addEventListener('click', (e) => {
        e.preventDefault();
        textBox.textContent = 'Paspausta';
    });
}
console.groupEnd();
console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
{
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const newBox = document.createElement('div');
        newBox.classList.add('createdBox');
        MotherBox.append(newBox);
    });
}
console.groupEnd();
console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
{
    const pHtmlElement = document.createElement('p');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        pHtmlElement.innerHTML = `Box num: ${document.querySelectorAll('.createdBox').length}`;
        document.body.append(pHtmlElement);
    });
}
console.groupEnd();
console.groupEnd();
//# sourceMappingURL=TS-Assertions.js.map