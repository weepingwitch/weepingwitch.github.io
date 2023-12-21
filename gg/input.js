var jlx, jly, jrx, jry, jolx, joly, jorx, jory;
var dirtyx, dirtyy, retval;

var inputdiv;
var idivwidth, idivheight, idivhalf;
var icanv;
var ictx;
var icx, icy;
var alx,aly,arx,ary;
var isx,isy;

var cstickradius = 14;

var touches = [];

jory = 1;
jorx = 0;



function makeInputs(){
    inputdiv = document.getElementById("input");
    inputdiv.innerHTML="<canvas id='icanvas' width='200' height='100'></canvas>";
    icanv = document.getElementById("icanvas");
    icanv.addEventListener( 'touchstart', onTouchStart, false );
	icanv.addEventListener( 'touchmove', onTouchMove, false );
	icanv.addEventListener( 'touchend', onTouchEnd, false );
    ictx = icanv.getContext('2d');
    ictx.strokeStyle = "black";
    ictx.fillStyle = "gray";
    ictx.lineWidth = 2;
    icanv.style.height = inputdiv.clientWidth/2;
    inputdiv.style.height = icanv.style.height;
    idivwidth = inputdiv.clientWidth;
    idivhalf = idivwidth / 2;
    isx = icanv.clientWidth / 200;
    isy = icanv.clientHeight / 100;
    var icrect = icanv.getBoundingClientRect();
    icx = Math.floor(icrect.left);
    icy = Math.floor(icrect.top);
    
}


function drawInputs(){

    ictx.clearRect(0,0,200,100);
    if (touchleftid == -1){
        //draw left centered
        ictx.beginPath();
            ictx.arc((50),50,cstickradius,0,Math.PI*2);
            ictx.fill();
            ictx.stroke();
        ictx.closePath();

    }
    else{
        //draw left stick moved
        ictx.beginPath();
            ictx.moveTo(leftstartx/isx,leftstarty/isy);
            ictx.lineTo(alx/isx,aly/isy);
            ictx.stroke();
        ictx.closePath();
        ictx.beginPath();
            ictx.arc(alx/isx,aly/isy,cstickradius,0,Math.PI*2);
            ictx.fill();
            ictx.stroke();
        ictx.closePath();

    }
    if (touchrightid == -1){
        //draw right centered
        ictx.beginPath();
            ictx.arc(150,50,cstickradius,0,Math.PI*2);
            ictx.fill();
            ictx.stroke();
        ictx.closePath();

    }
    else{
        //draw right stick moved
        ictx.beginPath();
            ictx.moveTo(rightstartx/isx,rightstarty/isy);
            ictx.lineTo(arx/isx,ary/isy);
            ictx.stroke();
        ictx.closePath();
        ictx.beginPath();
            ictx.arc(arx/isx,ary/isy,cstickradius,0,Math.PI*2);
            ictx.fill();
            ictx.stroke();
        ictx.closePath();
    }
}



window.addEventListener('resize', function(event) {
    makeInputs();
}, true);


var touchleftid = -1;
var touchrightid = -1;


var leftstartx = -1;
var leftstarty = -1;
var rightstartx = -1
var rightstarty = -1;

function onTouchStart(e) {
	touches = e.touches; 
    for(var i = 0; i<e.changedTouches.length; i++){
		var touch =e.changedTouches[i]; 
        tx = touch.clientX - icx;
        ty = touch.clientY - icy;
        
        if (tx < idivhalf){
            //left side touch
            if (touchleftid == -1){
                touchleftid = touch.identifier;
                leftstartx = tx;
                leftstarty = ty;
                alx = tx;
                aly = ty;
            }


        }
        else{
            //right side touch
            if (touchrightid == -1){
                touchrightid = touch.identifier;
                rightstartx = tx;
                rightstarty = ty;
                arx = tx;
                ary = ty;
            }

        }
        
        

    }
}
 
function onTouchMove(e) {
	 // Prevent the browser from doing its default thing (scroll, zoom)
    e.preventDefault();
    logdiv.innerHTML = "";
    touches = e.touches; 
    for(var i = 0; i<e.changedTouches.length; i++){
		var touch =e.changedTouches[i]; 
        tx = touch.clientX - icx;
        ty = touch.clientY - icy;

        if (touch.identifier == touchleftid){
            alx = tx;
            aly = ty;
             dirtyx = tx - leftstartx;
             dirtyy = leftstarty - ty;
             dirtyx = Math.min(Math.max(-cstickradius,dirtyx),cstickradius)/cstickradius;
             dirtyy = Math.min(Math.max(-cstickradius,dirtyy),cstickradius)/cstickradius;
            if (magnitude(dirtyx,dirtyy) > 1){
                retval = normalize(dirtyx,dirtyy);
                jlx = retval[0];
                jly = retval[1];
             }
             else{
                jlx = dirtyx;
                jly = dirtyy;
             }
            if (!((jlx==0)&&(jly==0))){
                jolx = jlx;
                joly = jly;
            }
            
            logdiv.innerHTML += "left: " + jlx + "," + jly + "<BR>";
    
        }
        if (touch.identifier == touchrightid){
            arx = tx;
            ary = ty;
             dirtyx = tx - rightstartx;
             dirtyy = rightstarty - ty;
            if (!((dirtyx==0)&&dirtyy==0)){
                retval = normalize(dirtyx,dirtyy);
                jrx = retval[0];
                jry = retval[1];
                jorx = jrx;
                jory = jry;
            }
                
            
            
            logdiv.innerHTML += "right: " + jrx + "," + jry + "<BR>";
         }
    }
} 
 
function onTouchEnd(e) { 
	touches = e.touches; 
    for(var i = 0; i<e.changedTouches.length; i++){
		var touch =e.changedTouches[i]; 
        if (touch.identifier == touchleftid){
            touchleftid = -1;
            jolx = jlx;
            joly = jly;
            jlx = 0;
            jly = 0;
        }
        if (touch.identifier == touchrightid){
            touchrightid = -1;
            if (!((jrx==0)&&(jry==0))){
                jorx = jrx;
                jory = jry;
            }
            
            jrx = 0;
            jry = 0;
        }
        

    }
    
}
