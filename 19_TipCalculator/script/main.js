const btn = document.querySelector(".btn");
tip = document.querySelector(".tip");
total = document.querySelector(".total");
error = document.querySelector(".error");

const hideError = () => {
    setTimeout(() => {
        error.style.display = "none";
    }, 5000);
};

const calculateTip = (e) => {
    
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if(bill === "" || rate == ""){
        error.style.display = "block";
        hideError();                                                            
    }
    else if(isNaN(bill)){
        error.innerHTML = "Try Enter a Number";
        error.style.display = "block";
        hideError();  
    }
    else {
        let tipAmt = bill * rate;

        let totalAmt = Number(bill) + tipAmt;

        tip.innerHTML = `Tip : Rs ${tipAmt}`;
        total.innerHTML = `Total Bill : Rs ${totalAmt}`;
    }

};

btn.addEventListener("click", calculateTip);