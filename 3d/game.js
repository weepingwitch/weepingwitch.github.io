
//gamestate
var gs = {
  'mode':'gameplay',
  'levelnum':0,

}
var lastt;
var icanv;
//build canvases
const gHolder = document.getElementById("gameHolder");
gHolder.innerHTML="<canvas style='z-index:1;width:" + 2*vw + "px;height:" + 2*vh + "px;' id='bcanvas' width='" + vw + "' height='" + vh + "'></canvas><canvas style='z-index:2;width:" + 2*vw + "px;height:" + 2*vh + "px;' id='mcanvas'  width='" + vw + "' height='" + vh + "'></canvas><canvas style='z-index:3;position:absolute;top:0;width:" + 2*vw + "px;height:" + 2*vh + "px;'  id='uicanvas' width='" + vw + "' height='" + vh + "'></canvas>";
canv = document.getElementById('bcanvas');
mcanv = document.getElementById('mcanvas');
uicanv = document.getElementById('uicanvas');
icanv = document.getElementById('icanv');
var ircanv = document.getElementById('ircanv');
var ictx = icanv.getContext('2d');
var irctx = ircanv.getContext('2d');
bctx = canv.getContext('2d');
mctx = mcanv.getContext('2d');

uctx = uicanv.getContext('2d');

//attach mouse handlers to left
icanv.addEventListener('mousedown', function(event) {
 mdown(scaleInput(event.clientX,event.clientY,icanv));
}, false);
icanv.addEventListener('mouseup', function(event) {
   mup(scaleInput(event.clientX,event.clientY,icanv));
}, false);
icanv.addEventListener('mousemove', function(event){
 mmove(scaleInput(event.clientX,event.clientY,icanv));
}, false);
//attach to the right side
ircanv.addEventListener('mousedown', function(event) {
 mdown(scaleInput(event.clientX,event.clientY,ircanv),false);
}, false);
ircanv.addEventListener('mouseup', function(event) {
   mup(scaleInput(event.clientX,event.clientY,ircanv),false);
}, false);
ircanv.addEventListener('mousemove', function(event){
 mmove(scaleInput(event.clientX,event.clientY,ircanv),false);
}, false);
//treat touches as clicks
icanv.addEventListener("touchstart", function (e) {
var touch = e.touches[0];
var mouseEvent = new MouseEvent("mousedown", {
 clientX: touch.clientX,clientY: touch.clientY
});
icanv.dispatchEvent(mouseEvent);
}, false);
icanv.addEventListener("touchmove", function (e) {
var touch = e.touches[0];
var mouseEvent = new MouseEvent("mousemove", {
 clientX: touch.clientX, clientY: touch.clientY
});
icanv.dispatchEvent(mouseEvent);
}, false);
icanv.addEventListener("touchend", function (e) {
var touch = e.changedTouches[0];
var mouseEvent = new MouseEvent("mouseup", {
 clientX: touch.clientX,clientY: touch.clientY
});
icanv.dispatchEvent(mouseEvent);
}, false);
//for right side
ircanv.addEventListener("touchstart", function (e) {
var touch = e.touches[0];
var mouseEvent = new MouseEvent("mousedown", {
 clientX: touch.clientX,clientY: touch.clientY
});
ircanv.dispatchEvent(mouseEvent);
}, false);
ircanv.addEventListener("touchmove", function (e) {
var touch = e.touches[0];
var mouseEvent = new MouseEvent("mousemove", {
 clientX: touch.clientX, clientY: touch.clientY
});
ircanv.dispatchEvent(mouseEvent);
}, false);
ircanv.addEventListener("touchend", function (e) {
var touch = e.changedTouches[0];
var mouseEvent = new MouseEvent("mouseup", {
 clientX: touch.clientX,clientY: touch.clientY
});
ircanv.dispatchEvent(mouseEvent);
}, false);


//keep mobile touches from being treated as scrolls
document.body.addEventListener("touchstart", function (e) {
if (e.target == icanv || e.target == ircanv)
 e.preventDefault();

}, false);
document.body.addEventListener("touchend", function (e) {
if (e.target == icanv || e.target == ircanv)
 e.preventDefault();

}, false);
document.body.addEventListener("touchmove", function (e) {
if (e.target == icanv || e.target == ircanv)
 e.preventDefault();

}, false);


init();

ictx.fillStyle="black";
irctx.fillStyle="black";
ictx.beginPath();
ictx.arc(100,100,20,0,2*Math.PI);
ictx.fill();
irctx.beginPath();
irctx.arc(100,100,20,0,2*Math.PI);
irctx.fill();


function init(){
console.log("starting game");


}







//clear a canvas
function clearcanv(cx){
cx.clearRect(0,0,vw,vh);
}

//account for canvas positioning and scaling
function scaleInput(xv, yv, sca){
var rect = sca.getBoundingClientRect(),
scaleX = sca.width / rect.width,
scaleY = sca.height / rect.height;
var xval = (xv - rect.left ) * scaleX ,
yval = (yv - rect.top ) * scaleY;
return [xval,yval];
}

var mcls;
var mdir;
var mdirr;
var clicking = false;
var clickingr = false;




//input functions
function mdown(mpos, isleft = true){

  if (isleft){
    clicking = true;
    mdir = [mpos[0] - 100,-(mpos[1]-100)];

  clearcanv(ictx);

  ictx.beginPath();
  ictx.arc(mpos[0],mpos[1],20,0,2*Math.PI);
  ictx.fill();
  }
  else{
    clickingr = true;
mdirr = [mpos[0] - 100,-(mpos[1]-100)];
  clearcanv(irctx);

  irctx.beginPath();
  irctx.arc(mpos[0],mpos[1],20,0,2*Math.PI);
  irctx.fill();
  }

console.log("touch started at " + mpos[0] + "," + mpos[1]);
mcls = mpos;


//uctx.fillRect(mpos[0]-5,mpos[1]-5,10,10);

}

function mup(mpos, isleft = true){


if (isleft){
  clearcanv(ictx);
  ictx.beginPath();
  ictx.arc(100,100,20,0,2*Math.PI);
  ictx.fill();
  clicking = false;
}
else{
  clearcanv(irctx);
  irctx.beginPath();
  irctx.arc(100,100,20,0,2*Math.PI);
  irctx.fill();
  clickingr = false;
}

console.log("touch ended at " + mpos[0] + "," + mpos[1]);



//uctx.fillRect(mpos[0]-5,mpos[1]-5,10,10);
}


function mmove(mpos, isleft = true){
  if (isleft){
    if (clicking){
      mdir = [mpos[0] - 100,-(mpos[1]-100)];

      clearcanv(ictx);

      ictx.beginPath();
      ictx.arc(mpos[0],mpos[1],20,0,2*Math.PI);
      ictx.fill();


    //  console.log(mdir);
    }
  }
  else{
    if (clickingr){
      mdirr = [mpos[0] - 100,-(mpos[1]-100)];

      clearcanv(irctx);

      irctx.beginPath();
      irctx.arc(mpos[0],mpos[1],20,0,2*Math.PI);
      irctx.fill();


    //  console.log(mdir);
    }
  }


//  uctx.fillStyle = "rgba(255,255,0,.9)";
//  uctx.fillRect(mpos[0]-2,mpos[1]-2,4,4);
}







var canvas;
var device;
var mesh;
var meshes = [];
var mera;
document.addEventListener("DOMContentLoaded", ginit, false);
function ginit() {
   canvas = mcanv;

   mera = new SoftEngine.Camera();
   device = new SoftEngine.Device(canvas);

    //  var m1 =      makeCube(new BABYLON.Vector3(2,0,20));
  // var m2 = makeCube(new BABYLON.Vector3(-2,0,20),false);

makeCube(new BABYLON.Vector3(0,1.5,0),.9,true,7);
makeCube(new BABYLON.Vector3(0,4,0),.7,true,-3);
makeCube(new BABYLON.Vector3(0,6,0),.5,true,1);
makeCube(new BABYLON.Vector3(0,7.5,0),.3,true,-5);

makeCube(new BABYLON.Vector3(3,-4,3),1);
makeCube(new BABYLON.Vector3(-3,-4,3),1);
makeCube(new BABYLON.Vector3(3,-4,-3),1);
makeCube(new BABYLON.Vector3(-3,-4,-3),1);

makeCube(new BABYLON.Vector3(5,-6,0),1);
makeCube(new BABYLON.Vector3(-5,-6,0),1);
makeCube(new BABYLON.Vector3(5,-8,0),1);
makeCube(new BABYLON.Vector3(-5,-8,0),1);
makeCube(new BABYLON.Vector3(7,-8,0),1);
makeCube(new BABYLON.Vector3(-7,-8,0),1);
makeCube(new BABYLON.Vector3(0,-8,5),1);
makeCube(new BABYLON.Vector3(0,-8,-5),1);
makePointy(new BABYLON.Vector3(7,-7,0));
makePointy(new BABYLON.Vector3(-7,-7,0));
makePointy(new BABYLON.Vector3(0,-7,5));
makePointy(new BABYLON.Vector3(0,-7,-5));

makeCube(new BABYLON.Vector3(3,-7,3),2);
makeCube(new BABYLON.Vector3(-3,-7,3),2);
makeCube(new BABYLON.Vector3(3,-7,-3),2);
makeCube(new BABYLON.Vector3(-3,-7,-3),2);
var posneg = -1;
for (var i=0; i < 2*Math.PI;i += Math.PI/8){
  makeCube(new BABYLON.Vector3(10*Math.cos(i)+8*Math.cos(i),6*Math.cos(i) + 4 + Math.sin(i),10*Math.sin(i)+8*Math.sin(i)),.7,true,(Math.sin(i)+.5+i*posneg));
  posneg = -posneg;
}
//makeFlatGround(new BABYLON.Vector3(0,-1,0));
//makeFlatGround(new BABYLON.Vector3(4,-1,0));
//makeFlatGround(new BABYLON.Vector3(0,-1,4));
//makeFlatGround(new BABYLON.Vector3(-4,-1,0));
//makeFlatGround(new BABYLON.Vector3(0,-1,-4));

makePointy(new BABYLON.Vector3(0,-3,0) );
makePointy(new BABYLON.Vector3(1,-5,1));
makePointy(new BABYLON.Vector3(-1,-5,1));
makePointy(new BABYLON.Vector3(-1,-5,-1));
makePointy(new BABYLON.Vector3(1,-5,-1));
makeCube(new BABYLON.Vector3(0,-4,0));
makeCube(new BABYLON.Vector3(0,-7,0),2);
makePointy(new BABYLON.Vector3(3,-3,3));
makePointy(new BABYLON.Vector3(3,-3,-3));
makePointy(new BABYLON.Vector3(-3,-3,3));
makePointy(new BABYLON.Vector3(-3,-3,-3));

   mera.Position = new BABYLON.Vector3(0, -1, -60);

    // Calling the HTML5 rendering loop
   requestAnimationFrame(drawingLoop);
}
var dt;
// Rendering loop handler
function drawingLoop(tt) {
  dt = tt - lastt;
  lastt = tt;
   device.clear();

if (clicking && mdir != null){
  if (mdir[1] > 10){
    mera.Position = mera.Position.add(mera.Forward.scale(.003* Math.abs(mdir[1])*.25*dt))
  }
  if (mdir[1] < -10){
      mera.Position = mera.Position.subtract(mera.Forward.scale(.003* Math.abs(mdir[1])%.25*dt))
  }
  if (mdir[0] > 10){
    var newdirec = new BABYLON.Vector3(mera.Forward.z,mera.Forward.y,-mera.Forward.x);
    newdirec.normalize()
    mera.Position = mera.Position.add(newdirec.scale(.003* Math.abs(mdir[1])*.25*dt))
  }
  if (mdir[0] < -10){
    var newdirec = new BABYLON.Vector3(mera.Forward.z,mera.Forward.y,-mera.Forward.x);
    newdirec.normalize()
    mera.Position = mera.Position.subtract(newdirec.scale(.003* Math.abs(mdir[1])*.25*dt))

  }
}

if (clickingr && mdirr != null){
  if (mdirr[1] > 10){
    mera.Rotation.x -= .00002 * Math.abs(mdirr[1]) * dt;
      }
  if (mdirr[1] < -10){
    mera.Rotation.x += .00002 * Math.abs(mdirr[1])* dt;
      }
  if (mdirr[0] > 10){
      mera.Rotation.y += .00002 * Math.abs(mdirr[0]) * dt;
  }
  if (mdirr[0] < -10){
      mera.Rotation.y -= .00002 * Math.abs(mdirr[0])* dt;
  }
}



   for (var index = 0; index < meshes.length; index++) {

      // current mesh to work on
      var cMesh = meshes[index];

      if (cMesh.doesrotate){
        // rotating slightly the cube during each frame rendered
      cMesh.Rotation.x += 0.01 * cMesh.rf;

      cMesh.Rotation.y += 0.01 * cMesh.rf;


      cMesh.Position.x = Math.sin(cMesh.rf*tt/4000 + cMesh.rf *4)*cMesh.rdist;
      cMesh.Position.z = Math.cos(cMesh.rf*tt/4000+ cMesh.rf*4)*cMesh.rdist;

      }


}

    // Doing the various matrix operations
   device.render(mera, meshes);
   // Flushing the back buffer into the front buffer
   device.present();
    // Calling the HTML5 rendering loop recursively

    //console.log(mera.Position);
    //console.log(mera.Rotation);
   requestAnimationFrame(drawingLoop);
}





// Add event listener on keypress
document.addEventListener('keypress', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
//console.log(`Key pressed ${name} - Key code value: ${code}`);
if (code == "KeyA"){
  mera.Rotation.y -= 0.05;
}
if (code == "KeyD"){
  mera.Rotation.y += 0.05;
}
if (code == "KeyW"){
  mera.Position = mera.Position.add(mera.Forward)
}
if (code == "KeyS"){
  mera.Position = mera.Position.subtract(mera.Forward)
}

if (code == "KeyQ"){
  var newdirec = new BABYLON.Vector3(mera.Forward.z,mera.Forward.y,-mera.Forward.x);
  newdirec.normalize()
  mera.Position = mera.Position.subtract(newdirec);
}
if (code == "KeyE"){
  var newdirec = new BABYLON.Vector3(mera.Forward.z,mera.Forward.y,-mera.Forward.x);
  newdirec.normalize()
  mera.Position = mera.Position.add(newdirec);
}


}, false);






//animation routines



var img = new Image();
img.onload = function () { // Triggered when image has finished loading.
 img_obj.source = img;  // we set the image source for our object.
}
//img.src = 'img/filename.png';


function draw_anim(dt) { // context is the canvas 2d context.
clearcanv(mctx);
 if (mobj.source != null)
     mctx.drawImage(mobj.source, mobj.current * mobj.width, 0,
                       mobj.width, mobj.height,
                       vw/5,vh/3,vw*(3/5),vh/3);
 mobj.fcount += dt;
 if (mobj.anim && mobj.fcount > mobj.flen){
   mobj.current = (mobj.current + 1) % mobj.total_frames;
   mobj.fcount = 0;
                  // incrementing the current frame and assuring animation loop
 }

}



//funcs

function randfrom(myarray){
  return myarray[Math.floor(Math.random() * myarray.length)];
}

function randintinc(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sqrmag(x1, y1, x2, y2){
 let y = x2 - x1;
 let x = y2 - y1;

 return (x * x + y * y);
}

function zShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
