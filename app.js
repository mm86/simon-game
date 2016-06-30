// Get the canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = [240, 240, 230, 230];
var y = [240, 225, 225, 240];
var start = [0, 1.5 * Math.PI, 1 * Math.PI, 0.5 * Math.PI];
var end = [0.5 * Math.PI, 0, 1.5 * Math.PI, 1 * Math.PI];
var color = ["blue", "red", "green", "yellow"];

var xw = canvas.width / 2;
var yh = canvas.height / 2;


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


function flashComponents() {

    var index = [

        [0, 1],
        [2, 3, 1]

    ];


    var m = 0;
    var loop = setInterval(function() {
        //console.log(sequence[m]);
        animate(index[m]);

        m++;
        if (m >= index.length) {
            clearInterval(loop);
        }
    }, 6000);


}

function animate(arr) {
    var j = 0;

    var interval = setInterval(function() {
        changeColor(arr[j]);
        console.log(j, arr.length, arr[j]);
        j++;
        if (j >= arr.length) {
            clearInterval(interval);
        }
    }, 1000);

}

function changeColor(val) {


    console.log(val);

    function f() {
        console.log("inside f");
        setTimeout(function() {
            ctx.beginPath();
            ctx.arc(x[val], y[val], 90, start[val], end[val]);
            ctx.lineWidth = 50;
            ctx.strokeStyle = "black";
            ctx.stroke();
        }, 1000);
    }
    f();

    function k() {
        console.log("inside k");
        setTimeout(function() {
            ctx.beginPath();
            ctx.arc(x[val], y[val], 90, start[val], end[val]);
            ctx.lineWidth = 50;
            ctx.strokeStyle = color[val];
            ctx.stroke();
        }, 1500);
    }
    k();

}

$('#myCanvas').click(function(e) {

    e.preventDefault();
    var nx, ny;
    nx = -(xw - e.pageX);
    ny = yh - e.pageY;
    if (nx > 0 && ny > 0) {
        console.log(3);
    } else if (nx < 0 && ny > 0) {
        console.log(0);
    } else if (nx > 0 && ny < 0) {
        console.log(2);
    } else if (nx < 0 && ny < 0) {
        console.log(1);
    }

});

function draw() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawLargerCircle();
    drawSmallerCircle();
    drawComponents();
    //drawButtons();
    flashComponents();
    //requestAnimationFrame(draw);

}

draw();
