var dotx, doty, aimx, aimy, retval;

function drawloop(){
    ctx.clearRect(0,0,screenwidth,screenheight);
     dotx = ((jolx + 1)/2) * screenwidth;
     doty = screenheight - ((joly+1)/2 * screenheight);
    ctx.beginPath();
        
        ctx.arc(dotx,doty,20,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
        ctx.moveTo(dotx,doty);
    
        ctx.lineTo(dotx + (jorx*50), doty - (jory*50));
    ctx.stroke();
    ctx.closePath();
    requestAnimationFrame(drawloop);
}