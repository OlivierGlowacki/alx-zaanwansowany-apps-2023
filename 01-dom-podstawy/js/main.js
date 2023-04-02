
// Eventy

// Glowne Eventy:

// click
// submit

// Wzor eventu

// const handleTitleClick = () => {
//   console.log('h1 zostal klikniety');
// }

// title.addEventListener('click', handleTitleClick);


const messageForm = document.querySelector('#messageForm');
const nameInput = document.querySelector('#nameInput');
const messageInput = document.querySelector('#messageInput');
const list = document.querySelector('#list');

// event jest to wbudowany obiekt, ktory przetrzymuje informacji o wykonanym zdarzeniu
const handleSubmit = (event) => {
  // event.preventDefault() powoduje zatrzymanie domyslnej akcji przegladarki jaka jest wyslanie formularza.
  event.preventDefault();

  // 1. Pobranie wartosci z inputow
  // console.log(nameInput.value)
  // console.log(messageInput.value);

  // 2. Dodanie nowego elementu do HTML
  list.innerHTML += `
    <li>
      <strong> ${nameInput.value} </strong> napisal
      <p> ${messageInput.value} </p>
    </li>
  `

  nameInput.value = '';
  messageInput.value = '';
}

messageForm.addEventListener('submit', handleSubmit);


// Cwiczenie dla was:

// w HTML jest guzik "usun wszystkie elementy". Dodaj event, ktory po wcisnieciu guzika, usunie wszystkie elementy listy. UWAGA: po usunieciu listy, powinienem dalej moc dodawac nowe elementy
const clearList = () => {
    list.innerHTML = '';
}
document.querySelector('#clear').addEventListener('click', clearList);
