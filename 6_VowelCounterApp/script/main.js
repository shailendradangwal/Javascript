/* Also added has/have according to the word -- question from another student */

const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", vowelCounter)

function vowelCounter(){
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();
    let verb = "";
   
    
    for (let i = 0; i < wordVal.length; i++) {
        let letter = wordVal[i];
        let singular = "have";
        let plural = "has";
        if(letter.match(/([a,e,i,o,u, ])/)) {
            vowelCount++;
            verb = plural;
        }
        else{
            verb = singular;
        }
       
    }

    
result.innerHTML = `${word.value.toUpperCase()} ${verb} ${vowelCount} Vowels`;
  
}