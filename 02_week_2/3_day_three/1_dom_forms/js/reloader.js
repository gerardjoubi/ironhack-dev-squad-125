const reloads = document.querySelectorAll(".reload");

function reloadPage() {
    window.location.reload();
}
reloads.forEach(reload => {
    reload.onclick = reloadPage;
})