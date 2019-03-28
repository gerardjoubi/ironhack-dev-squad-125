/*
    A simplistic example of todoList
    Thing can get more complex when adding new features,
    such as todo-item removal...
*/

const input = document.getElementById("new_todo");
const btn = document.getElementById("add_todo");
const todos = document.getElementById("todos");
const noTodos = document.getElementById("no_todos");

function addTodo() {
  // checking part (prevent empty items)
  if (!input.value) return alert("Sorry, you must add something to do...");
  // hidding default item (nothing to do yet...)
  if (todos.children.length >= 1) noTodos.style.display = "none";
  else noTodos.style.display = "list-item";
  // creating part
  const newItem = document.createElement("li");
  newItem.classList.add("item"); // add a css class
  newItem.textContent = input.value; // set todo text content
  todos.appendChild(newItem); // insert the new node in it's parent target
  input.value = ""; // reset the input element
}

btn.onclick = addTodo;
