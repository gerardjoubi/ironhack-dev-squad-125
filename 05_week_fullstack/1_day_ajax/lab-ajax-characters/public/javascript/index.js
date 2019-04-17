import APIHandler from "./APIHandler.js";

const charsAPI = new APIHandler("http://localhost:8000");
console.log(charsAPI);

/** usefull dom elements (forms) */
const charContainers = document.querySelector(".characters-container");
const createForm = document.getElementById("new-character-form");
const editForm = document.getElementById("edit-character-form");

/** DOM LOGIC : event-handlers associated with event-listeners */
/** the event listeners are located in the ./APIHandler.js file  */
document.getElementById("fetch-all").onclick = function() {
  charsAPI
    .getFullList()
    .then(apiResult => {
      console.log(apiResult.data);
      appendChars(apiResult.data);
    })
    .catch(err => console.log(err));
};

function appendChars(charList) {
  charContainers.innerHTML = "";

  charList.forEach(char => {
    
    const charElement = document.createElement("div");
    charElement.className = "character-info";

    for (let prop in char) {
      if (prop === "id") continue;
      let div = document.createElement("div");
      div.className = prop;
      div.textContent = char[prop];
      charElement.appendChild(div);
    }
    charContainers.appendChild(charElement);
  });
}

document.getElementById("fetch-one").onclick = function() {
  charsAPI.getOneRegister(document.querySelector("[name=character-id]").value);
};

document.getElementById("delete-one").onclick = function() {
  const id = document.querySelector("[name=character-id-delete]").value;
  charsAPI
    .deleteOneRegister(id)
    .then(apiResult => {
      document.getElementById("delete-one").style.background = "green";
    })
    .catch(err => {
      document.getElementById("delete-one").style.background = "red";
    });
    
};

document.getElementById("new-character-form").onsubmit = function(e) {
  e.preventDefault(); // mandatory to prevent page reload
  charsAPI.createOneRegister({
    // make use of element.querySelector instead of document.querySelector
    name: createForm.querySelector("[name=name]").value,
    occupation: createForm.querySelector("[name=occupation]").value,
    cartoon: createForm.querySelector("[name=cartoon]").value,
    weapon: createForm.querySelector("[name=weapon]").value
  }); //  pass form values to the logic Class
};

document.getElementById("edit-character-form").onsubmit = function(e) {
  e.preventDefault(); // mandatory to prevent page reload
  charsAPI.updateOneRegister({
    // make use of element.querySelector instead of document.querySelector
    id: editForm.querySelector("[name=chr-id]").value,
    name: editForm.querySelector("[name=name]").value,
    occupation: editForm.querySelector("[name=occupation]").value,
    cartoon: editForm.querySelector("[name=cartoon]").value,
    weapon: editForm.querySelector("[name=weapon]").value
  }); //  pass form values to the logic Class
};
