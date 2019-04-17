// 1 déclarations des variables du module

var title = document.getElementById("title");
var btn = document.getElementById("button_1");
var btn2 = document.getElementById("button_2");
var usersListElement = document.getElementById("users");
var listUsers = ["chris", "gérard", "guillaume"]; // len : 3
//                 0         1           2
console.log("ici", title, btn, btn2);
console.log("list user => ", listUsers);

// [] crochets / square brackets
// {} accolades / curly brackets
// > chevron ou supérieur / greater than sign
// > chevron ou inférieur / less than sign
// () parenthèses / parenthesis

// déclarations des fonctions
function getMessageEncouragement() {
    console.log("exec")
    return "<span>allez, courage les gars !!!!<br></span>";
}

function handleClick() {
    title.innerHTML = getMessageEncouragement();
}

function handleClickToDisplayUsers() {
    // console.log("@user handle")
    for (let i = 0; i < listUsers.length; i++) {
        // console.log(i, listUsers[i]);
        // usersListElement.innerHTML += `<li>${listUsers[i]}</li>`;
        usersListElement.innerHTML += "<li>" + listUsers[i]  + "</li>";
        // usersListElement.innerHTML += "<li>listUsers[i]</li>";
    }
    // listUsers.forEach(function(user) {
    //     console.log(user);
    // });
}

var input = document.getElementById("my_text_input");

input.oninput = function(evt) {
    // console.log(evt)
    title.innerHTML = evt.target.value;
}

// gestionnaires d'évènements !!!
btn.onclick = handleClick;
btn2.onclick = handleClickToDisplayUsers;
// btn2.addEventListener("click", handleClickToDisplayUsers); // alias line above