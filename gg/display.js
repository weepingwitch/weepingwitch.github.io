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
    screendiv.innerHTML=
    "<canvas id='bgcanvas' style='z-index:1;position:absolute;top:0;width:" + screenwidth + ";height:" + screenheight + ";' width='480' height='320'></canvas>" +
    "<canvas id='mcanvas' style='z-index:2;position:absolute;top:0width:" + screenwidth + ";height:" + screenheight + ";' width='480' height='320'></canvas>" +
    "<canvas id='uicanvas' style='z-index:3;position:absolute;top:0;width:" + screenwidth + ";height:" + screenheight + ";' width='480' height='320'></canvas>";


var canv = document.getElementById('mcanvas');
    var uicanv = document.getElementById('uicanvas');
    var bgcanv = document.getElementById("bgcanvas");
    ctx = canv.getContext('2d');
   // ctx.scale(sf,sf);
ctx.strokeStyle = "cyan";
ctx.lineWidth = 5;
ctx.fillStyle = "green";
    uictx = uicanv.getContext('2d');
   // uictx.scale(sf,sf);
    bgctx = bgcanv.getContext('2d');
   // bgctx.scale(sf,sf);
}

window.addEventListener('resize', function(event) {
    makeScreen();
}, true);


function drawImage(canv,image, x, y, rotation, scale=1){
    canv.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    canv.rotate(rotation);
    canv.drawImage(image, -image.width / 2, -image.height / 2);
    canv.setTransform(1,0,0,1,0,0)
} 

var meimg = new Image;
meimg.src = "https://64.media.tumblr.com/fcb80d683ae115df2300783347c28873/f19a6107c31f2f4d-bb/s1280x1920/ed2f14a35de909f4093da6a20e0b7c04fae0a6ac.jpg"
