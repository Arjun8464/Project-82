canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent= "";
var last_position_of_x=0,last_position_of_y=0;
color="black";
line_width=1 ;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
     current_position_of_mouse_x= e.cilentX- canvas.offsetLeft;
     current_position_of_mouse_y= e.cilentY- canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,20,0,2*Math.PI);
    ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}
