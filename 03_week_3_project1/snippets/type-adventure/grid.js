export default class Grid {
  constructor(level) {
    this.level = level;
    this.sizes = [[3, 1], [3, 2], [3, 3]];
    this.grid = document.getElementById("grid");

    this.buildGrid();
  }
  buildGrid() {
    const currentGridSize = this.sizes[this.level - 1];
    const wordCount = currentGridSize[0] * currentGridSize[1];
    this.grid.style.display = "grid";
    this.grid.style.gridColumnGap = "40px";
    this.grid.style.gridRowGap = "40px";
    this.grid.style.gridTemplateColumns = `repeat(${currentGridSize[0]}, 1fr`;
    this.grid.style.gridTemplateRows = `repeat(${currentGridSize[1]}, 500px`;
    this.grid.innerHTML = "";
    for (let i = 0; i < wordCount; i += 1) {
      this.grid.innerHTML += "<div></div>";
    }
  }
}
