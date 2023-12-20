var me;
var enems = [];



function initgame(){


    me = new girl(screenwidth/2,screenheight/2);
    new enem(10,10);
    new enem(screenwidth-10,screenheight-10);



    requestAnimationFrame(mainloop);


}


var dt;
var lastt = -1;
function mainloop(tt){
    //time logic
    dt = tt - lastt;
    if (lastt == -1){dt = 0;}
    if (dt > 3333){location.reload();}
    lastt = tt;


    //update loop
    me.update(dt);
    for (let p of enems){
        p.update(dt);
    }

    //draw loop
    ctx.clearRect(0,0,screenwidth,screenheight);
    me.draw();
    for (let p of enems){
        p.draw();
    }


    //repeat loop
    requestAnimationFrame(mainloop);
}



function trymove(obj, nx,ny){
    if (nx > 0 && ny > 0 && nx < screenwidth && ny < screenheight){
        obj.x = nx;
        obj.y = ny;
        return true;
    }
    else{
        return false;
    }
}