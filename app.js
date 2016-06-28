// Get the canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = [240, 240, 230, 230];
var y = [240, 225, 225, 240];
var start = [0, 1.5 * Math.PI, 1 * Math.PI, 0.5 * Math.PI];
var end = [0.5 * Math.PI, 0, 1.5 * Math.PI, 1 * Math.PI];
var color = ["blue", "red", "green", "yellow"];

//add event listeners
/*
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
*/

//outer larger circle
function drawLargerCircle() {

    ctx.beginPath();
    ctx.arc(235, 230, 140, 0, 2 * Math.PI);
    ctx.fillStyle = '#000';
    ctx.fill();

}

//inner smaller circle
function drawSmallerCircle() {

    ctx.beginPath();
    ctx.arc(235, 230, 60, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();

}

//four main components of the game
function drawComponents() {

    for (var i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(x[i], y[i], 90, start[i], end[i]);
        ctx.lineWidth = 50;
        ctx.strokeStyle = color[i];
        ctx.stroke();

    }
}

function draw() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawLargerCircle();
    drawSmallerCircle();
    drawComponents();
    //drawButtons();
    requestAnimationFrame(draw);

}

draw();
