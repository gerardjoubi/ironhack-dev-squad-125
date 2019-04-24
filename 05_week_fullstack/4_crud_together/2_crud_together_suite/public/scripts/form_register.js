const icon = document.getElementById("reveal_password");
const inputPassword = document.getElementById("password");

icon.onclick = function reavealPassword() {
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
  inputPassword.type = icon.classList.contains("fa-eye-slash")
    ? "text"
    : "password";
};
