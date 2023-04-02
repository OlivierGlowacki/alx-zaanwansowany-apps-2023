// Napisz kod slidera

// 1. Stworz sobie pusta tablice images
// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie

// 1
let images = [];

// 2
images.push('https://www.josera.pl/media/wysiwyg/ratgeber_PL/gluchy_pies/Hund_taub_shutterstock_1488987320_Beitragsbild1.jpg');
images.push('https://www.zooplus.pl/magazyn/wp-content/uploads/2018/01/pies-z-nadwag%C4%85.jpeg');
images.push('https://petslover.pl/wp-content/uploads/2022/12/biegajacy-szczeniak-1280x640.jpg');
images.push('https://kakadu.pl/blog/wp-content/uploads/2014/05/co-robic-gdy-pies-ma-niedowage.jpg');

// 3
let counter = 0;

// 4
const img = document.querySelector('#image');
img.src = images[0];

// 5
let next = document.querySelector('#nextButton');
const nextImage = () => {
    counter++;
    if(counter >= images.length){
        counter = 0;
    }
    img.src = images[counter];    
};
next.addEventListener("click", nextImage);

// 6
let prev = document.querySelector('#prevButton');
const prevImage = () => {
    counter--;
    if(counter < 0){
        counter = images.length -1;
    }
    img.src = images[counter];    
};
prev.addEventListener("click", prevImage);


