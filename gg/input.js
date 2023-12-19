var jlx, jly, jrx, jry, jolx, joly, jorx, jory;
var dirtyx, dirtyy, retval;

var inputdiv;
var idivwidth, idivhalf;
var icanv;
var ictx;
var icx, icy;

var cstickradius = 50;

var touches = [];

function makeInputs(){
    inputdiv = document.getElementById("input");
    inputdiv.innerHTML="<canvas id='icanvas'></canvas>";
    icanv = document.getElementById("icanvas");
    icanv.addEventListener( 'touchstart', onTouchStart, false );
	icanv.addEventListener( 'touchmove', onTouchMove, false );
	icanv.addEventListener( 'touchend', onTouchEnd, false );
    ictx = icanv.getContext('2d');
    idivwidth = inputdiv.clientWidth;
    idivhalf = idivwidth/2;
    var icrect = icanv.getBoundingClientRect();
    icx = Math.floor(icrect.left);
    icy = Math.floor(icrect.top);
    
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
            }


        }
        else{
            //right side touch
            if (touchrightid == -1){
                touchrightid = touch.identifier;
                rightstartx = tx;
                rightstarty = ty;
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
             
            jolx = jlx;
            joly = jly;
            logdiv.innerHTML += "left: " + jlx + "," + jly + "<BR>";
    
        }
        if (touch.identifier == touchrightid){
    
             dirtyx = tx - rightstartx;
             dirtyy = rightstarty - ty;
            
                retval = normalize(dirtyx,dirtyy);
                jrx = retval[0];
                jry = retval[1];
            
            jorx = jrx;
            jory = jry;
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
            jorx = jrx;
            jory = jry;
            jrx = 0;
            jry = 0;
        }
        

    }
    
}
