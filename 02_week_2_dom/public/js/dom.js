
console.log(document.getElementById("btn_test"));

function contactServer() {
    console.log("je suis dom.js");
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn_test").onclick = contactServer;
});