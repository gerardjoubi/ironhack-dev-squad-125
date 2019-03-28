const introOverlay = document.getElementById("intro_overlay");
const btnStart = document.getElementById("btn_start");
const arrows = document.getElementById("arrows");



btnStart.onclick = function() {
    introOverlay.classList.add("is-hidden");
    btnStart.classList.add("is-hidden");
    arrows.classList.remove("is-hidden");
}