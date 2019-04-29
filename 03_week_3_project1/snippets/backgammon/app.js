import checkers from "./checkers.js";

/** VAR DECLARATIONS */

var dropped = false;

const checkerHeight = 90;

function handleCheckerDrop(evt) {
  evt.preventDefault(); // mandatory !!!
  if (!this.classList.contains("col")) return false;
  const slug = evt.dataTransfer.getData("text/plain");
  console.log(slug)
  if (!slug) throw new Error("html slug of checker is required");
  const color = slug.match("black") ? "black" : "white";
  attachCheckerEvents(drawAChecker(this.getAttribute("data-column"), color));
  dropped = true;
}

function drawBoardGame() {
  const board = document.getElementById("board");
  for (let i = 0; i < 24; i++) {
    let col = document.createElement("div");
    col.className = "col";
    col.setAttribute("data-column", i + 1);
    col.ondragover = evt => evt.preventDefault(); // mandatory 
    col.ondrop = handleCheckerDrop;
    board.appendChild(col);
  }
  return board;
}

function selectChecker(evt) {
  const previous = document.querySelector(".checker.is-selected");
  if (previous === this) previous.classList.remove("is-selected");
  else if (previous && previous !== this) {
    previous.classList.toggle("is-selected");
     this.classList.toggle("is-selected");
  } else  this.classList.toggle("is-selected");
}

function drawAChecker(index, color) {
  const currentCol = document.querySelector(`[data-column="${index}"]`);
  const checker = document.createElement("div");
  checker.className = "checker " + color;
  checker.draggable = true;
  return currentCol.appendChild(checker);
}

function attachCheckerEvents(checker) {
  checker.onclick = selectChecker;
  return checker;
}

// 36% de 10

function initCheckers(positions, color) {
  positions.forEach((col, colIndex) => {
    col.forEach((val, valIndex) => {
      if (val === 1) attachCheckerEvents(drawAChecker(colIndex + 1, color));
    });
  });
}

/** LAUNCHERS */

drawBoardGame();

for (let color in checkers) {
  initCheckers(checkers[color].ingame, color);
}

/** LISTENERS */

document.ondragstart = function(evt) {
  evt.target.classList.add("is-selected");
  evt.dataTransfer.setData("text/plain", evt.target.outerHTML);
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.effectAllowed = "move";
};

document.ondragend = function(evt) {
  if (dropped) evt.target.remove();
  else throw new Error("old moved checker hasn't been properly removed from DOM");
};
