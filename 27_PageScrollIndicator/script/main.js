/*
const links = document.querySelector(".topnav a");


links.addEventListener("click", smoothScroll);

function smoothScroll(e){
 
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior : "smooth",
    });
}
*/

/*STICKY NAVBAR -- ADDING .sticky to header while Y is more than 0*/
window.addEventListener("scroll", () => {
  
    const header = document.querySelector(".topnav");
    header.classList.toggle("sticky", window.scrollY > 0);
  
  })
  /*STICKY NAVBAR -- ADDING .sticky to header while Y is more than 0*/


/* Menu Switcher ARRAY*/

const linkList = document.getElementsByClassName("link");



for (let i = 0; i < linkList.length; i++)
{
    linkList[i].addEventListener("click",() => {
        var current = document.getElementsByClassName("active");      
        current[0].classList.remove("active");
        linkList[i].classList.add("active");
      })
}
//}


/* Menu Switcher */



/* Scroll to TOP */

const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);

scrollBtn.addEventListener("click", scrollToTop);

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
    if (rootEl.scrollTop / scrollTotal > 0.3){
        scrollBtn.classList.add("show-btn");
    }
    else{
        scrollBtn.classList.remove("show-btn");
    }
}

function scrollToTop(){
    rootEl.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* Scroll to TOP */




/* Scroll Indicator */

window.onscroll = () => scrollProgress();

function scrollProgress(){
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;
    
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercentage = (currentState / pageHeight) * 100; 

    const progressBar = document.querySelector(".progress");

    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "% ";
    
}



/* Scroll Indicator */