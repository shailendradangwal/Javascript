const countTo = "01 Jan 2024";

const c = setInterval(() => {

    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600 % 24);
    const minute = Math.floor(totalSeconds/60 % 60);
    const seconds = Math.floor(totalSeconds % 60);


    const countDown = document.getElementById("countdown");

    countDown.textContent = `${days} Days ${format(hours)} hrs : ${format(minute)} min : ${format(seconds)} sec`;

    if(totalSeconds < 0){
        clearInterval(c);
        countDown.textContent = "HAPPY NEW YEAR";
    }


}, 1000)





//Timer

let time = 10;
let promoTime = time * 60;

let counting = document.getElementById("timer");

function startTimer() {
    let promoTimer = setInterval(() => {

        if(promoTime <= 0){
            clearInterval(promoTimer);
            counting.innerHTML = "Counting Done";
        }
        else{
            promoTime--;
            const days = Math.floor(promoTime/3600/24);
            const hours = Math.floor(promoTime/3600 % 24);
            const minute = Math.floor(promoTime/60) % 60;
            const seconds = Math.floor(promoTime % 60);

            counting.innerHTML = `Time : ${format(hours)} hrs : ${format(minute)} min : ${format(seconds)} sec`;
        }
    }, 1000);
}

startTimer();


function format(t){
    return t < 10 ? `0${t}` : t;
}
