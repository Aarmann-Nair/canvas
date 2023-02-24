canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
var last_position_of_x,last_position_of_y;
width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";

}

canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
   console.log("My touch start")
}




canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle=document.getElementById("textinput").value;
        ctx.linewidth=2;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();

    
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}