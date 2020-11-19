// Scrivi un programma che stampi i numeri da 1 a 100,

//ma per i multipli di 3 stampi“Fizz” al posto del numero 

//e per i multipli di 5 stampi Buzz.

//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

/* for (var x = 1; x < 101; x++){

    if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
    } else if (x % 5 == 0) {
        console.log("Buzz");
    } else if (x % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(x);
    }

} */

//proviamo così pour divertissement a farlo con ciclo while

var x = 1;

while (x < 101) {
    
    if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
    } else if (x % 5 == 0) {
        console.log("Buzz");
    } else if (x % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(x);
    };
    x++;
}



//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per?
//Abbiamo visto qualcosa di particolare che possiamo usare?
//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"