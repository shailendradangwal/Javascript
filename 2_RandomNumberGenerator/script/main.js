/* Route 1 - Random Number between 0-10 */
const number = document.querySelector(".number");
const btn = document.querySelector(".generate");


const generateNumber = ()  => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);    
    number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);

/*
const rand = Math.floor(Math.random() * 10 + 1);
console.log(rand);
*/


/* Route 2 - Random Number from user choice */
const number2 = document.querySelector(".number2");
const btn2 = document.querySelector(".generate2");
const minnumber = document.querySelector(".minuser");
const maxnumber = document.querySelector(".maxuser");
const numbermin = minnumber.value;
const numbermax = maxnumber.value;
let difference = numbermax - numbermin;





const generateNumber2 = ()  => {
    console.log(numbermin);
    console.log(numbermax);
    console.log(difference);
    const randomNumber2 = Math.floor((Math.random() * (difference + 1)) + numbermin);  
   
    //console.log(randomNumber2);
    let randomwithinrange = Math.floor(numbermin + randomNumber2);
    console.log(randomwithinrange);
    number2.innerHTML = randomwithinrange;

};

btn2.addEventListener("click", generateNumber2);