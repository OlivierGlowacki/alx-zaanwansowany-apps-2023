const products = [
    {
        name: 'banan',
        price: 4.99
    },
    {
        name: "chleb",
        price: 3.25
    },
    {
        name: 'ser',
        price: 7.00
    },
    {
        name: 'baton',
        price: 1.99
    }
];

let sum = 0;
let avr = 0;

for (let  i=0; i<products.length; i++){
    sum += products[i].price;
}
avr = sum/products.length;
console.log(`łączna cena produktów: ${sum} \nśrednia cena produktu: ${avr}`);
// console.log(`średnia cena produktu: ${avr}`);