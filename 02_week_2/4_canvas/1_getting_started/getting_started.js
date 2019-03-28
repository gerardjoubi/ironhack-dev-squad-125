const canvas = document.getElementById("canvas");

canvas.width = canvas.scrollWidth; // get drawing surface width set in css
canvas.height = canvas.scrollHeight; // get drawing surface height set in css   

const ctx = canvas.getContext("2d");



// NOTE : canvas uses a cartesian coordinate system ... with a twist to remember !

// ****************************
// shapes: rectangles
// ****************************
// fillRect(x, y, width, height)   // Draws a filled rectangle.
// strokeRect(x, y, width, height) // Draws a rectangular outline.
// clearRect(x, y, width, height)  // Clears the specified rectangular
// ****************************
// ****************************
ctx.fillStyle = "#0074D9"; // choose a fill color
ctx.fillRect(10, 10, 200, 100);// draw a filled rect at this x/y position + h/w metrics
//           x    y     w    h
ctx.fillStyle = "#B10DC9"; // choose a fill color
ctx.fillRect(660, 460, 120, 120);// draw a filled rect at this x/y position + h/w metrics
//            x    y     w    h
ctx.strokeStyle = "#85144b"; // choose a stroke (border) color
ctx.strokeRect(40, 440, 300, 120);

ctx.fillStyle = "#FF4136"; // choose a fill color
ctx.fillRect(560, 40, 200, 200);// draw a filled square 
//           x     y   w    h
ctx.clearRect(580, 60, 160, 160); // remove the fill at this x/Y position
//            x    y    w    h
ctx.lineWidth = 4; // define a line width
ctx.strokeStyle = "#2ECC40"; // pick a new stroke color
ctx.strokeRect(590, 70, 140, 140); // draw a stroked square at this x/Y position + h/w metrics

// The canvas API Gives provides a function to draw rectangles/squares
// It would be nice if we could have the same for every possible shapes.
// But it's not possible so we would have to do some work to make it happends.

// ****************************
// shapes: path (generic construct)
// ****************************
// beginPath()
// Creates new path. Future drawing commands goes into the path to build the path up.
// closePath()
// Closes the path so that future drawing commands are once again directed to the context.
// stroke()
// Draws the shape by stroking its outline.
// fill()
// Draws a solid shape by filling the path's content area.

// moveTo(x, y)  // Moves the pen to the coordinates specified by x and y.
// Very useful function : doesn’t draw anything but becomes part of the path list described above
// ****************************
// ****************************

// draw path
// start the path
ctx.strokeStyle = "black";
ctx.beginPath(); // mandatory starting draw point
// starting position is x=20, y=250
ctx.moveTo(20, 250);
// draw the line that has final coordinates x=250, y=250
ctx.lineTo(250, 250);
// stroke() executes the drawing
ctx.stroke();
// move the pen to x=250, y=250...
ctx.moveTo(250, 248);
// start a new line from these coordinates: x=250, y=400 ...
ctx.lineTo(250, 400); // to these coords : x:250, y:400
ctx.stroke(); // (draw the line :D)
ctx.moveTo(250, 400);
ctx.lineTo(780, 400);
ctx.stroke();
// // close the path
ctx.closePath(); // close the path (ends line drawing)


// ****************************
// shapes: triangle
// ****************************
ctx.beginPath();
ctx.fillStyle = "#39CCCC";
ctx.moveTo(480, 450);
ctx.lineTo(420, 550);
ctx.lineTo(530, 550);
ctx.fill();

// ****************************
// ****************************

// ****************************
// shapes: circle
// ****************************
// when working with circle, we will need to use radians instead of degrees
// degrees can be converted to radians with this formula:
// degrees * (Math.PI / 180)
// radians to degrees is the opposite formula:
// radians * (180 / Math.PI)
// PI is one of the most important constant in Math... don't get me into that :D
// ****************************
// ****************************

ctx.fillStyle = "#001f3f";
ctx.beginPath(); // mandatory. let's start to draw our circle
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(400, 280, 100, 0, Math.PI * 2); // radians from 0 to full circle
//       x   Y  radius start end
ctx.fill();


ctx.beginPath();
ctx.strokeStyle = "#FFDC00";
ctx.arc(280, 60, 50, 0, Math.PI * 2); // radians from 0 to full circle
ctx.stroke();


ctx.beginPath();
ctx.fillStyle = "#F012BE";
ctx.arc(400, 60, 50, 0, Math.PI / 2); // radians from 0 to quarter circle
// ctx.arc(400, 60, 50, 0, Math.PI  / 1); // radians from 0 to half circle
ctx.lineTo(400, 60);
ctx.fill();

