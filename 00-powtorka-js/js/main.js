// Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli

// Gotowe rozwiazanie wrzuc na GIT i wyslij link.

// const people = [
//     {
//       name: "Michał",
//       age: 12
//     },
//     {
//       name: "Damian",
//       age: 10
//     },
//     {
//       name: "Wiktoria",
//       age: 14
//     },
//     {
//       name: "Agata",
//       age: 8
//     }
// ]

// getTheOldestPerson(people);

// function getTheOldestPerson(people) {
//     let oldest;
//     let old = 0;
//     people.forEach(element => {
//         if (element.age > old){
//             old = element.age;
//             oldest = element.name;
//         }
//     });
//     console.log(oldest);
// }
  


// Zadanie z powtórki

// 1. Mając tablicę imion, dopisz do niej swoje imie. Nastepnie za pomoca metody tablica.length - 1, wypisz w konsoli swoje imie.

const names20 = ['Damian', 'Pawel', 'Michal'];
names20.push("Olivier");
console.log(names20[names20.length -1]);

// 2. Majac obiekt buta, sprawdz czy rozmiar jest wiekszy od 42. Jesli jest, to wypisz w konsoli "To jest duzy but"

const shoe50 = {
  brand: "nike",
  color: 'white',
  size: 43
}

const chechSize = (shoe) => {
    if(shoe.size > 42){
        console.log("To jest duzy but");
    }
}

chechSize(shoe50);

// 3. Majac tablice produktów, oblicz sumę produktów, których kategoria to owoce

const products = [
  {
    name: 'jablko',
    category: 'fruits',
    price: 2.00
  },
  {
    name: 'kawa',
    category: 'other',
    price: 7.25
  },
  {
    name: 'banan',
    category: 'fruits',
    price: 4.99
  }
]

const checkProduct = (product) => {
    return product.category === "fruits";
} 

const result = products.filter(checkProduct);
sum = 0;
result.forEach(product => {
    sum += product.price;
})
console.log(sum);

// let sum = 0;
// for (product of products) {
//     if (product.category == 'fruits'){
//         sum += product.price;
//     }
// }
// console.log(`Suma produktów z kategorii owoce to ${sum}`);

// 4. Napisz funkcje sumProducts, ktora przyjmie tablice obiektow products z zadania 3, a nastepnie zwroci sume wszystkich produktow
  const sumProducts = (table) => {
    let sum = 0;
    for (item of table) {
        sum += item.price;
    }
    return sum;
  }

  console.log(sumProducts(products));
  
  
  
  
  
  