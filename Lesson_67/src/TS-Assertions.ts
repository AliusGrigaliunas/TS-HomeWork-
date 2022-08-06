/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
console.group('Assertions - užduotys');
const button = document.querySelector('#button') as HTMLButtonElement;
const textBox = document.querySelector('#textBox') as HTMLDivElement;
const MotherBox = document.querySelector('#MotherBox') as HTMLDivElement;
console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
{
  // sprendimą|sprendimo pavyzdžius spausdinkite čia

  button.addEventListener('click', (e: Event) => {
    e.preventDefault();
    textBox.textContent = 'Paspausta';
  });
}
console.groupEnd();

console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
{
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const newBox = document.createElement('div') as HTMLDivElement;
    newBox.classList.add('createdBox');
    MotherBox.append(newBox);

    // MotherBox.innerHTML +=
    // '<div style="border: 1px solid black; width: 100px; height: 100px"></div>';
  });
}
console.groupEnd();

console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
{
  // sprendimą|sprendimo pavyzdžius spausdinkite čia
  const pHtmlElement = document.createElement('p') as HTMLParagraphElement;
  button.addEventListener('click', (e) => {
    e.preventDefault();
    pHtmlElement.innerHTML = `Box num: ${document.querySelectorAll('.createdBox').length}`;
    document.body.append(pHtmlElement);
  });
}
console.groupEnd();

console.groupEnd();
