
//gamestate
var gs = {
  'mode':'gameplay',
  'levelnum':0,

}
var lastt;
//build canvases
const gHolder = document.getElementById("gameHolder");
gHolder.innerHTML="<canvas style='z-index:1;width:" + 2*vw + "px;height:" + 2*vh + "px;' id='bcanvas' width='" + vw + "' height='" + vh + "'></canvas><canvas style='z-index:2;width:" + 2*vw + "px;height:" + 2*vh + "px;' id='mcanvas'  width='" + vw + "' height='" + vh + "'></canvas><canvas style='z-index:3;position:absolute;top:0;width:" + 2*vw + "px;height:" + 2*vh + "px;'  id='uicanvas' width='" + vw + "' height='" + vh + "'></canvas>";
canv = document.getElementById('bcanvas');
mcanv = document.getElementById('mcanvas');
uicanv = document.getElementById('uicanvas');
bctx = canv.getContext('2d');
mctx = mcanv.getContext('2d');

uctx = uicanv.getContext('2d');

//attach mouse handlers
uicanv.addEventListener('mousedown', function(event) {
 mdown(scaleInput(event.clientX,event.clientY));
}, false);
uicanv.addEventListener('mouseup', function(event) {
   mup(scaleInput(event.clientX,event.clientY));
}, false);
uicanv.addEventListener('mousemove', function(event){
 mmove(scaleInput(event.clientX,event.clientY));
}, false);
//treat touches as clicks
uicanv.addEventListener("touchstart", function (e) {
var touch = e.touches[0];
var mouseEvent = new MouseEvent("mousedown", {
 clientX: touch.clientX,clientY: touch.clientY
});
uicanv.dispatchEvent(mouseEvent);
}, false);
uicanv.addEventListener("touchmove", function (e) {
var touch = e.touches[0];
var mouseEvent = new MouseEvent("mousemove", {
 clientX: touch.clientX, clientY: touch.clientY
});
uicanv.dispatchEvent(mouseEvent);
}, false);
uicanv.addEventListener("touchend", function (e) {
var touch = e.changedTouches[0];
var mouseEvent = new MouseEvent("mouseup", {
 clientX: touch.clientX,clientY: touch.clientY
});
uicanv.dispatchEvent(mouseEvent);
}, false);


//keep mobile touches from being treated as scrolls
document.body.addEventListener("touchstart", function (e) {
if (e.target == uicanv )
 e.preventDefault();

}, false);
document.body.addEventListener("touchend", function (e) {
if (e.target == uicanv )
 e.preventDefault();

}, false);
document.body.addEventListener("touchmove", function (e) {
if (e.target == uicanv )
 e.preventDefault();

}, false);


init();




function init(){
console.log("starting game");


}







//clear a canvas
function clearcanv(cx){
cx.clearRect(0,0,vw,vh);
}

//account for canvas positioning and scaling
function scaleInput(xv, yv){
var rect = canv.getBoundingClientRect(),
scaleX = canv.width / rect.width,
scaleY = canv.height / rect.height;
var xval = (xv - rect.left ) * scaleX ,
yval = (yv - rect.top ) * scaleY;
return [xval,yval];
}

var mcls;
var mdir;
var clicking = false;
//input functions
function mdown(mpos){
  clicking = true;
console.log("touch started at " + mpos[0] + "," + mpos[1]);
mcls = mpos;
uctx.fillStyle = "rgba(0,255,0,.9)";
drawblines = true;
//uctx.fillRect(mpos[0]-5,mpos[1]-5,10,10);

}

function mup(mpos){
  clicking = false;
console.log("touch ended at " + mpos[0] + "," + mpos[1]);
uctx.fillStyle = "rgba(0,0,255,.9)";
drawblines = false;
//uctx.fillRect(mpos[0]-5,mpos[1]-5,10,10);
}


function mmove(mpos){
  if (clicking){
    mdir = [mpos[0] - mcls[0],-(mpos[1]-mcls[1])];



  //  console.log(mdir);
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

makeCube(new BABYLON.Vector3(0,.7,0),.6,true,2);
makeCube(new BABYLON.Vector3(0,2.2,0),.5,true,-3);

makeCube(new BABYLON.Vector3(3,-3.1,3),2);
makeCube(new BABYLON.Vector3(-3,-3.1,3),2);
makeCube(new BABYLON.Vector3(3,-3.1,-3),2);
makeCube(new BABYLON.Vector3(-3,-3.1,-3),2);

for (var i=0; i < 2*Math.PI;i += Math.PI/8){
  makeCube(new BABYLON.Vector3(10*Math.cos(i),4,10*Math.sin(i)),.7,true,(Math.sin(i)+.2));
}
//makeFlatGround(new BABYLON.Vector3(0,-1,0));
makeFlatGround(new BABYLON.Vector3(4,-1,0));
makeFlatGround(new BABYLON.Vector3(0,-1,4));
makeFlatGround(new BABYLON.Vector3(-4,-1,0));
makeFlatGround(new BABYLON.Vector3(0,-1,-4));
makePointy(new BABYLON.Vector3(3,-1,3));
makePointy(new BABYLON.Vector3(0,-2,0));
makePointy(new BABYLON.Vector3(0,-5,0));

makePointy(new BABYLON.Vector3(3,-1,-3));
makePointy(new BABYLON.Vector3(-3,-1,3));
makePointy(new BABYLON.Vector3(-3,-1,-3));

   mera.Position = new BABYLON.Vector3(0, 0, -20);

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
  if (mdir[1] > 5){
    mera.Position = mera.Position.add(mera.Forward.scale(.003* Math.abs(mdir[1])*.5*dt))
  }
  if (mdir[1] < -5){
      mera.Position = mera.Position.subtract(mera.Forward.scale(.003* Math.abs(mdir[1])%.5*dt))
  }
  if (mdir[0] > 5){
      mera.Rotation.y += .00002 * Math.abs(mdir[0]) * dt;
  }
  if (mdir[0] < -5){
      mera.Rotation.y -= .00002 * Math.abs(mdir[0])* dt;
  }
}



   for (var index = 0; index < meshes.length; index++) {

      // current mesh to work on
      var cMesh = meshes[index];

      if (cMesh.doesrotate){
        // rotating slightly the cube during each frame rendered
      cMesh.Rotation.x += 0.01 * cMesh.rf;

      cMesh.Rotation.y += 0.01 * cMesh.rf;
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
