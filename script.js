const toggle = document.querySelector(".toggle-checkbox");
const price = document.querySelector(".pro-price");

toggle.addEventListener("click", () => {
    if(toggle.checked){
        price.textContent = "24";
    } else {
        price.textContent = "18";
    }
})
