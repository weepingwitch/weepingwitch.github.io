
function init(){
    console.log("let'sa go!")
    windowsetup();
    inittextures();
    createhexgrid();
    g.c.clearRect(0,0,canvasw,canvash);
    initialsetup();
     drawall();
     requestAnimationFrame(step);
}


var dt;
var pt;

function step(tt){

    g.oc.clearRect(0,0,canvasw,canvash);
    dt = tt-pt;
    
    dt = Math.min(dt,30);
    
    
    pt = tt;

    for(var tr of g.trains){
        moveTrain(tr);
        drawtrain(tr);
    }

   

    drawhighlights();
   
    requestAnimationFrame(step);
}

var g = {};


var curhex = null;
///


  function randfrom(myarray){
    return myarray[Math.floor(Math.random() * myarray.length)];
  }
  function randintinc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function randposneg(){
    return randfrom([-1,1]);
  }

  function sqrdist(x1,x2,y1,y2){
    return (((y2-y1)*(y2-y1)) + ((x2-x1)*(x2-x1)));
  }

  function clone(thing){
    return JSON.parse(JSON.stringify(thing));
  }


  function normalizeddif(x1,y1,x2,y2){
    
    var ret = [x2-x1,y2-y1];
   
    var retdiv = Math.sqrt(sqrdist(x1,x2,y1,y2));
    ret[0] = ret[0]/retdiv;
    ret[1] = ret[1]/retdiv;
   
    return ret;
  }


