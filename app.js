var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//bigger circle
ctx.beginPath();
ctx.arc(235,230,140,0,2*Math.PI);
ctx.fillStyle = '#000';
ctx.fill();
ctx.stroke();

//smaller circle
ctx.beginPath();
ctx.arc(235,230,60,0,2*Math.PI);
ctx.fillStyle = '#fff';
ctx.fill();
ctx.stroke();

//draw the four arcs
var x = [240,240,230,230];
var y = [240,225,225,240];
var start = [0,1.5*Math.PI,1*Math.PI,0.5*Math.PI];
var end = [0.5*Math.PI,0,1.5*Math.PI,1*Math.PI];
var color = ["#fff","red","green","yellow"];
//global scope:
var lastChange = 0;
//Change a color to lighter here
lastChange = Date.now();
var draw = function (a,b,c,d,e) {
    ctx.beginPath();
    ctx.arc(a,b,90,c,d);
    ctx.lineWidth = 50;
    ctx.strokeStyle = e;
    ctx.stroke();
}

function drawSimon() {
  ctx.clearRect(0, 0,ctx.canvas.width, ctx.canvas.height); 
   //Draw the simon here
  for(var i=0;i<4;i++){
    draw(x[i],y[i],start[i],end[i],color[i]);
    
  }
  
//Later in the code
if (Date.now() - lastChange > 100) {
  alert("changed");
    //Change colors back here
  color[0]="blue";
}
  requestAnimationFrame(drawSimon);
}
drawSimon();


