
const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");
const result = document.querySelector(".result");

const copyText = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(coupon.value).then(() => {
        btn.textContent = "Copied!!!";
        setTimeout(() => {
            btn.textContent = "Copy";
            result.innerHTML = coupon.value;
        }, 3000);
     });
};

btn.addEventListener("click", copyText);