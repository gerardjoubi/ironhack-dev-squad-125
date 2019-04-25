const iconReveal = document.getElementById("reveal_password");
const iconAvatar = document.getElementById("avatar");
const inputFile = document.getElementById("file_input");
const inputPassword = document.getElementById("password");

iconAvatar.onclick = function displayFileBox() {
  inputFile.click();
};

iconReveal.onclick = function reavealPassword() {
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
  inputPassword.type = icon.classList.contains("fa-eye-slash")
    ? "text"
    : "password";
};
