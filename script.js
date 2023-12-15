let toastBox = document.getElementById("toastBox");
let successMsg =
    '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg =
    '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

const successBtn = document.querySelector(".success-btn");
const errorBtn = document.querySelector(".error-btn");
const invalidBtn = document.querySelector(".invalid-btn");

successBtn.addEventListener("click", function () {
    showToast(successMsg);
});

errorBtn.addEventListener("click", function () {
    showToast(errorMsg);
});

invalidBtn.addEventListener("click", function () {
    showToast(invalidMsg);
});

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes("error")) {
        toast.classList.add("error");
    }
    if (msg.includes("Invalid")) {
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}
