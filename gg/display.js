var screendiv;
var screenwidth, screenheight;
var ctx, uictx, bgctx;


var roomwidth = 480;
var roomheight = 320;

function makeScreen(){
    screendiv = document.getElementById("screen");
    screenwidth = screendiv.clientWidth;
    screenheight = Math.floor(screenwidth * (2/3));
    screendiv.style.height = screenheight;
    screendiv.innerHTML="<canvas style='z-index:1;position:absolute;top:0' id='bgcanvas' width='" + screenwidth + "' height='" + screenheight + "'></canvas>" +
"<canvas style='z-index:2;position:absolute;top:0' id='mcanvas' width='" + screenwidth + "' height='" + screenheight + "'></canvas>" +
"<canvas style='z-index:3;position:absolute;top:0;'  id='uicanvas' width='" + screenwidth + "' height='" + screenheight + "'></canvas>";
console.log(screenwidth);

var sf = screenwidth/roomwidth;    
console.log(sf);

var canv = document.getElementById('mcanvas');
    var uicanv = document.getElementById('uicanvas');
    var bgcanv = document.getElementById("bgcanvas");
    ctx = canv.getContext('2d');
    ctx.scale(sf,sf);
ctx.strokeStyle = "cyan";
ctx.lineWidth = 5;
ctx.fillStyle = "pink";
    uictx = uicanv.getContext('2d');
    uictx.scale(sf,sf);
    bgctx = bgcanv.getContext('2d');
    bgctx.scale(sf,sf);
}

window.addEventListener('resize', function(event) {
    makeScreen();
}, true);