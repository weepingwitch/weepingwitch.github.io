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
var kbm = false;

var touches = [];
jlx = 0;
jly = 0;
jrx = 0;
jry = 0;
jory = 1;
jorx = 0;
var klx = 0;
var kly = 0;
var krx = 0;
var kry = 0;
var klleft = false;
var klright = false;
var klup = false;
var kldown = false;
var krleft = false;
var krright = false;
var krup = false;
var krdown = false;



document.onkeydown = function(e) {
    kbm = true;
    if (!e.repeat){
        if(e.key == "a" ) {klx -=1;klleft = true; };
        if(e.key == "w" ) {kly += 1;klup = true;}
        if(e.key == "d" ) {klx += 1;klright = true;}
        if(e.key == "s" ) {kly -= 1;kldown = true;}
        if (!((klx==0)&&(kly==0))){
            retval = normalize(klx,kly);
            jlx = retval[0];
            jly = retval[1];
        }
        else{
            jlx = 0;jly = 0;
        }
        if(e.key == "ArrowLeft" ) {krx = -1;jorx =krx; krleft = true;};
        if(e.key == "ArrowUp" ) {kry = 1;jory = kry;krup = true;}
        if(e.key == "ArrowRight" ) {krx = 1;jorx = krx;krright = true;}
        if(e.key == "ArrowDown" ) {kry = -1;jory = kry;krdown = true;}

       
        resetkeyboardinput();

    }
    
    
}


function resetkeyboardinput(){
    if (krup){
        jory = 1;
        jorx = 0;
        if (krleft){
            jorx = -1;
        }
        else{
            if (krright){
                jorx = 1;
             }
             
        }
    }

        if (krdown){
            jory = -1;
            jorx = 0;
            if (krleft){
                jorx = -1;
            }
            else{
                if (krright){
                    jorx = 1;
                 }
                 

             }
            }

        if (!krup && !krdown){
            if (krleft){
                jorx = -1;jory = 0;
            }
            if (krright){
                jorx = 1;jory = 0;
            }
        }
            
}
    


document.onkeyup = function(e) {

    if(e.key == "a" &&klleft ) {jolx = jlx;klx +=1;klleft = false;};
    if(e.key == "w" && klup ) {joly = jly;kly-=1;klup = false;}
    if(e.key == "d" && klright ) {jolx=jlx;klx-=1;klright = false;}
    if(e.key == "s" && kldown) {joly =jly;kly+=1;kldown = false;}
    if (!((klx==0)&&(kly==0))){
    retval = normalize(klx,kly);
        jlx = retval[0];
        jly = retval[1];
    }
    else{
        jlx = 0;
        jly = 0;
    }
    if(e.key == "ArrowLeft" ) {krleft = false;};
        if(e.key == "ArrowUp" ) {krup = false;}
        if(e.key == "ArrowRight" ) {krright = false;}
        if(e.key == "ArrowDown" ) {krdown = false;}


    resetkeyboardinput();
    

}


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
    if (!kbm){
        
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
            ictx.moveTo(50,50);
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
    else{
        //keyboard mode
        //draw left stick moved
        ictx.beginPath();
            ictx.moveTo(50,50);
            ictx.lineTo(50+(jlx*30),50-(jly*30));
            ictx.stroke();
        ictx.closePath();
        ictx.beginPath();
            ictx.arc(50+(jlx*30),50-(jly*30),cstickradius,0,Math.PI*2);
            ictx.fill();
            ictx.stroke();
        ictx.closePath();
        //draw right stick moved
        ictx.beginPath();
            ictx.moveTo(150,50);
            ictx.lineTo(150+(jorx*30),50-(jory*30));
            ictx.stroke();
        ictx.closePath();
        ictx.beginPath();
            ictx.arc(150+(jorx*30),50-(jory*30),cstickradius,0,Math.PI*2);
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
    kbm = false;
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
