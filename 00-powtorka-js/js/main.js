// Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli

// Gotowe rozwiazanie wrzuc na GIT i wyslij link.

const people = [
    {
      name: "Michał",
      age: 12
    },
    {
      name: "Damian",
      age: 10
    },
    {
      name: "Wiktoria",
      age: 14
    },
    {
      name: "Agata",
      age: 8
    }
]

getTheOldestPerson(people);

function getTheOldestPerson(people) {
    let oldest;
    let old = 0;
    people.forEach(element => {
        if (element.age > old){
            old = element.age;
            oldest = element.name;
        }
    });
    console.log(oldest);
}
  
  
  
  
  
  
  
  