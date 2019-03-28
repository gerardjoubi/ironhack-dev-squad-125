const reloads = document.querySelectorAll(".reload");
// reloads is a nodeList (array like...)
function reloadPage() {
    window.location.reload();
}
reloads.forEach(reload => {
    reload.onclick = reloadPage;
})