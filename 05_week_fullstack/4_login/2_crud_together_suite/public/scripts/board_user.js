const btns = document.querySelectorAll("#user_board .delete.btn");
const url = "http://localhost:3535/api/user";

function deleteUser(evt) {
  const clickedBtn = evt.target;
  const id = clickedBtn.getAttribute("data-user-id");
  axios
    .delete(`${url}/${id}`)
    .then(resultFromBackend => {
      document.getElementById(`user_${id}`).remove()
    })
    .catch(err => console.log(err));
}

console.log(btns);
btns.forEach(btn => {
  btn.onclick = deleteUser;
});
