const btn = document.getElementById("eraser_simple");
const content = document.getElementById("content_1");

function eraseContent() {
    content.innerHTML = ""; // this erase content's content ;)
    content.style.height = 0;
    content.style.padding = 0;
}

btn.onclick = eraseContent;