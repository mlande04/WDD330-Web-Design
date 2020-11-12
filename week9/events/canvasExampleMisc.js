// To add a canvas element to a page, the <canvas> tag is used specifying a height and width .
//<canvas id='canvas' width='400' height='400'>Sorry, but your browser does not support the canvas element</canvas>

// This canvas can now be accessed in a JavaScript program using the document.getElementById() method:
const canvasElement = document.getElementById('canvas');

// The getContext() method is used to access the context
const context = canvasElement.getContext('2d');

// The fill and stroke colors can be changed by assigning a CSS color to the fillStyle and strokeStyle properties respectively
// context.fillStyle = "#0000cc"; // a blue fill color 
// context.strokeStyle = "#ccc"; // a gray stroke color

// The lineWidth property can be used to set the width of any line strokes drawn onto the canvas.
context.lineWidth = 4;

// The fillRect() method can draw a filled-in rectangle. The first two parameters are the coordinates of the top-left corner, the third parameter is the width, and the last parameter is the height.
context.fillRect(10,10,100,50);

// The strokeRect() method works in the same way, but produces a rectangle that is not filled in. 
context.strokeRect(10,100,100,50);

// Straight lines can be drawn employing the moveTo() and lineTo() methods.
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

// The arc() method can be used to draw an arc of a given radius from a particular point. The first two parameters are the coordinates of the center of the arc; the next parameter is the radius, followed by the start angle, then the finish angle (note that these are measured in radians). The last parameter is a boolean value that says whether the arc should be drawn counter-clockwise. 
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();

// The fillText() method is used to write text onto the canvas.
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);

