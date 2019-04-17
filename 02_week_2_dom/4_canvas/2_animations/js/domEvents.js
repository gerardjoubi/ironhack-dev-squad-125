const introOverlay = document.getElementById("intro_overlay");
const btnStart = document.getElementById("btn_start");
const arrows = document.getElementById("arrows");


btnStart.onclick = function() {
    introOverlay.classList.toggle("is-hidden");
    btnStart.classList.toggle("is-hidden");
    btnStart.style.display = "none";
    arrows.classList.toggle("is-hidden");
}