const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const overlay = document.querySelector(".modal_overlay");
const modal = document.querySelector(".modal");

const HEDDEN_CLASS = "hidden";

openButton.addEventListener("click", () => {
    modal.classList.toggle(HEDDEN_CLASS);
});

closeButton.addEventListener("click", () => {
    modal.classList.toggle(HEDDEN_CLASS);
});

overlay.addEventListener("click", () => {
    modal.classList.toggle(HEDDEN_CLASS);
});

