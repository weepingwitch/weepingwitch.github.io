function drawloop(){
    ctx.beginPath();
    ctx.strokeStyle = "red";
    var dotx = ((jlx + 1)/2) * screenwidth;
    var doty = screenheight - (((jly + 1)/2) * screenheight);
    ctx.moveTo(dotx,doty);
    ctx.lineTo(dotx + (jrx*50), doty - (jry*50));
    ctx.stroke();
    ctx.closePath();
     requestAnimationFrame(drawloop);
}
