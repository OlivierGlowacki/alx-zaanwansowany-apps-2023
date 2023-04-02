// Za pomoca kodu JS wykonaj następujące zadania.
// Pamietaj, aby elementom HTML dodawac ID.

// 1. W konsoli wypisz obecny tekst przycisku
// 2. dodaj formularzowi klase my-form
// 3. Za pomoca JS dodaj do inputow jakis tekst
// 4. do elementu ul dodaj element li
{/* <li>
      <strong>Ada</strong> napisala
      <p> Super dzien. Duzo sie nauczylam </p>
    </li> */}

// 5.  Majac tablice obiektow messages, za pomoca petli dodaj do ul kilka elementow li

// const messages = [
//   {
//     author: 'Pawel',
//     message: 'Ale dzisiaj super dzien'
//   },
//   {
//     author: "Magda",
//     message: "Zimno jest"
//   }
// ]

// ---------------- 1
console.log(document.querySelector('#button').innerText);


// ---------------- 2
document.querySelector('form').classList.add('my-form');

// ---------------- 3
const input1 = document.querySelector('#imie');
const input2 = document.querySelector('#wiadomosc');
input1.value = 'Kris';
input2.value = 'lubi piwo bezalkoholowe!?!?!';

// ---------------- 4
const ul = document.querySelector('#list')
ul.innerHTML += `
<li>
    <strong>Ada</strong> napisala
    <p> Super dzien. Duzo sie nauczylam </p>
</li>
`

// --------------- 5
const messages = [
    {
        author: 'Pawel',
        message: 'Ale dzisiaj super dzien'
    },
    {
        author: "Magda",
        message: "Zimno jest"
    }
]

const addText = (item) => {
    ul.innerHTML += `
    <li>
        <strong>${item.author}</strong> napisal/a
        <p> ${item.message} </p>
    </li>
    `
}

messages.forEach(element => {
    addText(element);
});