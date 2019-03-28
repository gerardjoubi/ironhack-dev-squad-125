const listenKeyStrokes = function () {
    window.addEventListener("keydown", function (evt) {
        if (evt.key === "z") {
            console.log("move pad UP");
        } else if (evt.key === "s") {
            console.log("move pad DOWN");
        } else if (evt.key === "d") {
            console.log("move pad RIGHT");
        } else if (evt.key === "q") {
            console.log("move pad LEFT");
        }
    });
};
