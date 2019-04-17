
var classroomMatrix = [
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
    [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }],
    [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
    [{ x: 0, y: 3 }, { x: 1, y: 3 }],
    [{ x: 0, y: 4 }, { x: 1, y: 4 }]
];

console.log(classroomMatrix[2]);

classroomMatrix.forEach(row => {
    row.forEach(seat => {
        console.log(seat);
    });
});




