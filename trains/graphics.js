function inittextures(){
    var c_grass = document.getElementById("t_grass");
   
    var c_rocks = document.getElementById("t_rocks");
    
    var c_water = document.getElementById("t_water");
    
    var c_sand = document.getElementById("t_sand");
  
    var c_snow = document.getElementById("t_snow");
  
    var c_forest = document.getElementById("t_forest");
    
    
    var imagedata = null;
    var parray = [];

    parray= [
        0,0,0,255,
        20,255,0,255,
        0,0,0,255,
        20,255,0,255,

        200,255,0,255,
        0,0,0,255,
        20,255,0,255,
        0,0,0,255,
       ]
    const p8_g = new Uint8ClampedArray(parray);
    imagedata = new ImageData(p8_g,4,2);
    c_grass.getContext("2d").putImageData(imagedata,0,0);


     parray= [
        0,0,0,255,
        200,200,200,255,
        0,0,0,255,
        200,200,200,255,

        130,130,130,255,
        0,0,0,255,
        130,130,130,255,
        0,0,0,255,
       ]
    const p8_r = new Uint8ClampedArray(parray);
    imagedata = new ImageData(p8_r,4,2);
    c_rocks.getContext("2d").putImageData(imagedata,0,0);

    parray= [
        0,0,0,255,
        0,0,255,255,
        0,0,0,255,
        0,100,255,255,

        100,100,255,255,
        0,0,0,255,
        0,100,255,255,
        0,0,0,255,
       ]
    const p8_w = new Uint8ClampedArray(parray);
    imagedata = new ImageData(p8_w,4,2);
    c_water.getContext("2d").putImageData(imagedata,0,0);

       parray= [
        0,0,0,255,
        255,255,90,255,
        0,0,0,255,
       255,255,90,255,

        255,255,90,255,
        0,0,0,255,
       255,255,90,255,
        0,0,0,255,
       ]
    const p8_s = new Uint8ClampedArray(parray);
    imagedata = new ImageData(p8_s,4,2);
    c_sand.getContext("2d").putImageData(imagedata,0,0);

 parray= [
        0,0,0,255,
        255,255,255,255,
        0,0,0,255,
       255,255,255,255,

        255,255,255,255,
        0,0,0,255,
       255,255,255,255,
        0,0,0,255,
       ]
    const p8_sn = new Uint8ClampedArray(parray);
    imagedata = new ImageData(p8_sn,4,2);
    c_snow.getContext("2d").putImageData(imagedata,0,0);

    parray= [
        0,0,0,255,
       0,180,0,255,
        0,0,0,255,
     0,100,0,255,

      0,100,0,255,
        0,0,0,255,
      0,180,0,255,
        0,0,0,255,
       ]
    const p8_f = new Uint8ClampedArray(parray);
    imagedata = new ImageData(p8_f,4,2);
    c_forest.getContext("2d").putImageData(imagedata,0,0);

    


    var t_grass = g.c.createPattern(c_grass,"repeat");
    var t_rocks = g.c.createPattern(c_rocks,"repeat");
    var t_water = g.c.createPattern(c_water,"repeat");
    var t_sand = g.c.createPattern(c_sand,"repeat");
    var t_snow = g.c.createPattern(c_snow,"repeat");
    var t_forest = g.c.createPattern(c_forest,"repeat");

     lcolors = {"forest":t_forest,"grass":t_grass,"rocks":t_rocks,"water":t_water,"sand":t_sand,"snow":t_snow};



}

function drawtrain(t){
    var c = g.oc;
    for (var tc of t.cars){
       
    c.fillStyle = "purple";
        c.fillRect(tc[0] - 2,tc[1] - 2,4,4);
    }
  
}

function drawcity(tc){
    var c = g.c;
    var ch = g.hexgrid[tc];
    c.fillStyle = "black";
    c.fillRect(ch.px - 3,ch.py - 3,6,6);

}

function drawhighlights(){
    g.uc.clearRect(0,0,canvasw,canvash);
    for (var hl of uihighlights){
        drawhighlight(g.hexgrid[hl]);
    }

    if (inspected != null){
        drawhighlight(inspected,"cyan");
    }
  
    if(hovered != null){
        drawhighlight(hovered,"#FFFFFFaa")
    }
}


function drawall(){
    g.c.clearRect(0,0,canvasw,canvash);


    for(var h of g.hexgrid){
        drawhex(h);
    }

     for (var tc of g.cities){
        drawcity(tc);
    }
}


function drawhex(h){
    var c = g.c;
    c.strokeStyle="white";
   
        var cstring = "";
        if (drawres){
            cstring = "rgb(" + h.res.r + "," + h.res.g + "," + h.res.b + ")";
        } 
        else{
            cstring = lcolors[h.landtype]
            //console.log(h.landtype)
        }
        //console.log(cstring);
    c.fillStyle= cstring;
   
     c.beginPath();
    c.moveTo(h.corns[0][0],h.corns[0][1])
    for (var hc of h.corns){
        c.lineTo(hc[0],hc[1])
    }
    c.fill();
    //c.stroke();

    c.fillStyle = "red";
    if(h.landtype != "water"){
      //  c.fillText(h.i,h.px - 5,h.py+ 2);
    }

    c = g.c;
    for(var npn in h.rrs){
        if(h.rrs[npn]){
            //draw line to h.neighbors[npn];
            c.strokeStyle="black";
            c.beginPath();
            c.moveTo(h.px,h.py);
            var np = g.hexgrid[h.neighbors[npn]]
            c.lineTo(np.px,np.py);
            c.stroke();
        }
    }
    
    
}

function drawhighlight(h,cs=null){
    var c = g.uc;
     c.strokeStyle="cyan";
    if (cs== null){
var cstring = "white";
    c.fillStyle= cstring;
    }
    else{
        c.fillStyle = cs;
    }
    
     c.beginPath();
    c.moveTo(h.corns[0][0],h.corns[0][1])
    for (var hc of h.corns){
        c.lineTo(hc[0],hc[1])
    }
    c.fill();
    c.stroke();

}


var canvasw;
var canvash;

function windowsetup(){
    var candiv = document.getElementById("canvasholder");
    console.log(candiv);
    console.log(candiv.style.aspectRatio)
    
     canvasw = candiv.offsetWidth;
    canvash = candiv.offsetHeight;
     candiv.innerHTML = '<canvas class="gca" id="mcanvas" width="' + canvasnw + '" height="' + canvasnh + '"></canvas>';
    candiv.innerHTML += '<canvas class = "gca" id="ucanvas" width="' + canvasnw + '" height="' + canvasnh + '"></canvas>';
 candiv.innerHTML += '<canvas class = "gca" id="ocanvas" width="' + canvasnw + '" height="' + canvasnh + '"></canvas>';


 var cmode = document.getElementById("cmode");
var canvas = document.getElementById("mcanvas");
canvas.style.width = canvasw   + "px";
canvas.style.height = canvash + "px";
var ucanvas = document.getElementById("ucanvas");
ucanvas.style.width = canvasw  + "px";
ucanvas.style.height = canvash + "px";
var ocanvas = document.getElementById("ocanvas");
ocanvas.style.width = canvasw + "px";
ocanvas.style.height = canvash + "px";
ocanvas.addEventListener( 'click', event => {
    
    const bb = canvas.getBoundingClientRect();
    const x = Math.floor( (event.clientX - bb.left) / bb.width * canvas.width );
    const y = Math.floor( (event.clientY - bb.top) / bb.height * canvas.height );
    
   
    click(pixtohex(x,y));
  
});
ocanvas.addEventListener( 'mousemove', event => {
    
    const bb = canvas.getBoundingClientRect();
    const x = Math.floor( (event.clientX - bb.left) / bb.width * canvas.width );
    const y = Math.floor( (event.clientY - bb.top) / bb.height * canvas.height );
    
   
    mousemove(pixtohex(x,y));
  
});
var c = canvas.getContext("2d");
var uc = ucanvas.getContext("2d");
var oc = ocanvas.getContext("2d");
g.c = c;
g.uc = uc;
g.oc = oc;
if (g.hexgrid != null)
drawall();
}

window.onresize = windowsetup;