// Funkcije predstavljaju reusable parts in JS//
/*
function reusableFunction () {
    console.log("Hello World");
}
reusableFunction();
*/

/*Funkcija sa argumentima
function imeFunkcije(jedan, dva){
    console.log(jedan + dva);
}

imeFunkcije(6, 8);
*/

/* Sa return vraćamo vrijednost u funkciju
function timesFive (num){
    return num * 5;
}
const answer = timesFive(4);
console.log(answer);
*/
 /*
let processed = 0;
function processArg (num){
    return (num+3) /5;
}
processed = processArg(7);
console.log(processed);
*/

/* IF FUNKCIJA
function testEqual(val){
    if (val == 12){
        return "Equal";
    }
    return "Not Equal"
}
const answer = testEqual(15);
console.log(answer);
*/

/* IF FUNCKIJA SA LOGICAL AND OPERATOROM I MORAJU OBA USLOVA BITI TACNA DA BI SE IZVRSILA FUNKCIJA
function log(num){
    if (num > 5 && num < 10){
        return "Yes"
    }
    return "No"
}
const answer = log(11);
console.log(answer);
*/

/* LOGICAL OR OPERATOR I MORA SE ISPUNJAVATI SAMO JEDAN USLOV DA BI FUNKCIJA BILA IZVRSENA
function log(num){
    if (num > 10 || num < 5){
        return "true"
    }
    return "No"
}
const answer = log(6);
console.log(answer);
*/

/* ELSE IF FUNKCIJA 
function log(num){
    if (num < 5){
        return "manji od 5";
    } else if (num > 5){
        return "veci od 5";
    } else{
        return "veci od 10";
    }
}
const answer = log(7);
console.log(answer);
*/