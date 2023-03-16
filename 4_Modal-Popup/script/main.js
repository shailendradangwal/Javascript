/* Variables */
const modal = document.querySelector(".modal");
const modalTop = document.querySelector(".modal-top");
const modalRight = document.querySelector(".modal-right");
const modalBottom = document.querySelector(".modal-bottom");
const modalLeft = document.querySelector(".modal-left");
      modalContentTop = document.querySelector(".modal-contenttop");
      modalContentRight = document.querySelector(".modal-contentright");
      modalContentBottom = document.querySelector(".modal-contentbottom");
      modalContentLeft = document.querySelector(".modal-contentleft");
      btnT = document.querySelector(".btn_top");
      btnR = document.querySelector(".btn_right");
      btnB = document.querySelector(".btn_bottom");
      btnL = document.querySelector(".btn_left");
      closeT = document.querySelector(".closeTop");
      closeR = document.querySelector(".closeRight");
      closeB = document.querySelector(".closeBottom");
      closeL = document.querySelector(".closeLeft");


btnT.addEventListener("click", openModalT); 
btnR.addEventListener("click", openModalR); 
btnB.addEventListener("click", openModalB); 
btnL.addEventListener("click", openModalL); 
closeT.addEventListener("click", closeModalT);  
closeR.addEventListener("click", closeModalR);  
closeB.addEventListener("click", closeModalB);  
closeL.addEventListener("click", closeModalL);  
modalTop.addEventListener("click", closeModalT);  
modalRight.addEventListener("click", closeModalR);  
modalBottom.addEventListener("click", closeModalB);  
modalLeft.addEventListener("click", closeModalL);  


//Open Modal TOP
function openModalT(e) {
    e.preventDefault();
    modalTop.style.display = "block";
    modalTop.classList.add("slidetop");
}


//Close Modal TOP
function closeModalT() {
    modalContentTop.classList.add("slidetop-up");

    setTimeout(
        () => {
            modalTop.style.display = "none";
            modalContentTop.classList.remove("slidetop-up");
        },500);
}


//Open Modal RIGHT
function openModalR(e) {
    e.preventDefault();
    modalRight.style.display = "block";
    modalRight.classList.add("slideright");
}


//Close Modal RIGHT
function closeModalR() {
    modalContentRight.classList.add("slideright-left");

    setTimeout(
        () => {
            modalRight.style.display = "none";
            modalContentRight.classList.remove("slideright-left");
        },500);
}




//Open Modal BOTTOM
function openModalB(e) {
    e.preventDefault();
    modalBottom.style.display = "block";
    modalBottom.classList.add("slidebottom");
}


//Close Modal BOTTOM
function closeModalB() {
    modalContentBottom.classList.add("slidebottom-up");

    setTimeout(
        () => {
            modalBottom.style.display = "none";
            modalContentBottom.classList.remove("slidebottom-up");
        },500);
}



//Open Modal LEFT
function openModalL(e) {
    e.preventDefault();
    modalLeft.style.display = "block";
    modalLeft.classList.add("slideleft");
}


//Close Modal LEFT
function closeModalL() {
    modalContentLeft.classList.add("slideleft-right");

    setTimeout(
        () => {
            modalLeft.style.display = "none";
            modalContentLeft.classList.remove("slideleft-right");
        },500);
}