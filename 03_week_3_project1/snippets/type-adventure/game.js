import User from "./user.js";
import Grid from "./grid.js";
import Word from "./word.js";

class Game {
    constructor(level) {
        this.level = level;
        this.grid = new Grid(this.level);
        this.user = new User();
        this.words = [];
        this.dom = {
            grid: document.getElementById("grid"),
            btnStart: document.getElementById("btn_start_game")
        }
        this.dom.btnStart.onclick = this.start.bind(this); // on force la valeur de this à Game dans this.start, au lieu de dom.btnStart par défaut car event handler
    }
    
    start(){
        this.words.push(new Word(this.level));
        console.log(this.words);
    } 
    
    setGrid(){

    }
    
    increaseLevel(){

    }

    startClockTick(){

    } 
}

const game = new Game(3);



