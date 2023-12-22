var me;
var enems = [];
var projs = [];



function initgame(){


    me = new girl(240,160);
    new enem(10,10);
    new enem(470,310);



    requestAnimationFrame(mainloop);


}

var halfrate = false;

var dt;
var lastt = -1;
function mainloop(tt){    
    halfrate = !halfrate;
   
    //time logic

    dt = tt - lastt;
    if (lastt == -1){dt = 0;}
    if (dt > 3333){location.reload();}
    lastt = tt;


    //update loop
    me.update(dt);
    for (let p of projs){
        p.update(dt);
    }
    for (let p of enems){
        p.update(dt);
    }
    
    //draw loop
    ctx.clearRect(0,0,roomwidth,roomheight);
    me.draw();
    for (let p of enems){
        p.draw();
    }
    for (let p of projs){
        p.draw();
    }
    if (halfrate)
    drawInputs();
    //repeat loop
    requestAnimationFrame(mainloop);
}



function trymove(obj, nx,ny){
    if (nx > 0 && ny > 0 && nx < roomwidth && ny < roomheight){
        obj.x = nx;
        obj.y = ny;
        return true;
    }
    else{
        return false;
    }
}