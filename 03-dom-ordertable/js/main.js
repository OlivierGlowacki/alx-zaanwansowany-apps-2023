// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli

// 1
const table = document.querySelector('table');
const from = document.querySelector('#from');
const id = document.querySelector('#id');
const name = document.querySelector('#name');
const price = document.querySelector('#price');



const handleSubmit = (event) => {

    event.preventDefault();
    table.innerHTML += `
    <tr>
      <td>${id.value}</td>
      <td>${name.value}</td>
      <td>${price.value}</td>
    </tr>
    `
    id.value = '';
    name.value = '';
    price.value = '';
}

from.addEventListener('submit', handleSubmit);

const clearTable = () => {
    table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
    `;
}
document.querySelector('#clear').addEventListener('click', clearTable);
