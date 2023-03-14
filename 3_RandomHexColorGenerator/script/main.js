/* Route 1 - Random Hex Color and put it in body background */

const randomColor = document.querySelector(".color");
const btnColor = document.querySelector(".generate");
const divBg = document.querySelector(".counter-div");
const fontColor = document.querySelector(".counter-div");



const colorgenerator = () => {
    let color = Math.random();
    color = Math.random().toString(16).substring(2,8);
    randomColor.innerHTML = "#" + color;
    document.body.style.backgroundColor = "#" + color;

    /* Changing div background color*/
    let bgDiv = Math.random();
    bgDiv = Math.random().toString(16).substring(2,8);                                                                                     
    divBg.style.backgroundColor = "#" + bgDiv;

     /* Changing text color*/
     let colorTxt = Math.random();
     colorTxt = Math.random().toString(16).substring(2,8); 
     //console.log(colorTxt);                                                                                    
     fontColor.style.color = "#" + colorTxt;
}

btnColor.addEventListener("click", colorgenerator);
colorgenerator();
