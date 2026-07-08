const toggle = document.querySelector("#toggle");
const price = document.querySelector(".pro-price");
const drkMode = document.getElementById("toggle-2");

toggle.addEventListener("change", () => {
    if(toggle.checked){
        price.textContent = "26";
    } else {
        price.textContent = "18";
    }
})

drkMode.addEventListener("change", () => {
    if(drkMode.checked){
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.remove("dark-mode")
    }
})
