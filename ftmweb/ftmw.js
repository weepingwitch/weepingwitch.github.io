
//gamestate
var gs = {
  'mode':'gameplay',
  'levelnum':0,

}

//stone spawn positions
stonepos = [
  [],
  [[195,477],[110,462]],
  [[[93,442],[270,506]],[[118,519],[269,448]]],
  [[[80,422],[186,537],[280,450]],[[103,507],[182,453],[269,502]]],
  [[[60,429],[132,548],[208,437],[295,524]]]
];

//add external resources to cache
filesToCache.push('https://raw.githubusercontent.com/curiouslearning/FeedTheMonster/master/Feed%20the%20Monster/Assets/Art/Backgrounds/summer/bg_v01.jpg');
filesToCache.push('https://raw.githubusercontent.com/curiouslearning/FeedTheMonster/master/Feed%20the%20Monster/Assets/Art/Backgrounds/summer/hill_v01.png');
filesToCache.push('https://raw.githubusercontent.com/curiouslearning/FeedTheMonsterH5P/main/assets/images/idle.png');
filesToCache.push('https://raw.githubusercontent.com/curiouslearning/FeedTheMonsterH5P/main/assets/images/eat3.png');
filesToCache.push('https://raw.githubusercontent.com/curiouslearning/FeedTheMonsterH5P/main/assets/images/spit.png');

gs.puzzle = {
  'puzzlenum':0,
  'target':'e',
  'stones': ['e','m','c']
}

//build canvases
const gHolder = document.getElementById("gameHolder");
gHolder.innerHTML="<canvas style='z-index:1;' id='bcanvas' width='" + vw + "' height='" + vh + "'></canvas><canvas style='z-index:2;' id='mcanvas' width='" + vw + "' height='" + vh + "'></canvas><canvas style='z-index:3;position:absolute;top:0;'  id='uicanvas' width='" + vw + "' height='" + vh + "'></canvas>";
canv = document.getElementById('bcanvas');
mcanv = document.getElementById('mcanvas');
uicanv = document.getElementById('uicanvas');
bctx = canv.getContext('2d');
mctx = mcanv.getContext('2d');
uctx = uicanv.getContext('2d');


var bgimg = new Image();
bgimg.src = "https://raw.githubusercontent.com/curiouslearning/FeedTheMonster/master/Feed%20the%20Monster/Assets/Art/Backgrounds/summer/bg_v01.jpg";
bgimg.onload = function(e){
 drawprompt();
}
var gimg = new Image();
gimg.src = "https://raw.githubusercontent.com/curiouslearning/FeedTheMonster/master/Feed%20the%20Monster/Assets/Art/Backgrounds/summer/hill_v01.png";
gimg.onload = function(e){
 drawprompt();
}

var cimg = new Image();
cimg.src = "https://raw.githubusercontent.com/curiouslearning/FeedTheMonster/master/Feed%20the%20Monster/Assets/Art/Game%20Objects/CallOut/CallOut_magnet_v01.png"
cimg.onload = function(e){
  drawprompt();
}

var mobj = {
   'source': null,
   'current': 0,
   'total_frames': 7,
   'width': 768,
   'height': 632,
   'fcount':0,
   'flen':100,
   'anim':true
};
var lastt = 0;
var dt = 0;

var mspr = new Image();
mspr.src = "https://raw.githubusercontent.com/curiouslearning/FeedTheMonsterH5P/main/assets/images/idle.png"
mspr.onload = function (e){
 mobj.source = mspr;
}


var meat = new Image();
meat.src = "https://raw.githubusercontent.com/curiouslearning/FeedTheMonsterH5P/main/assets/images/eat3.png";

var mspit = new Image();
mspit.src = "https://raw.githubusercontent.com/curiouslearning/FeedTheMonsterH5P/main/assets/images/spit.png";

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


gs.stones = [];
curstone = null;
init();




function init(){
console.log("starting game");

var nums = gs.puzzle.stones.length;
var poss = randfrom(stonepos[nums]);
gs.puzzle.stones = zShuffle(gs.puzzle.stones);
var i = 0;
for (let s of gs.puzzle.stones){
  var ns = new stone(s,poss[i][0],poss[i][1]);
  gs.stones.push(ns);
  i+=1;
}
drawprompt();
window.requestAnimationFrame(draw);

}

function bgdraw(){
//background sky and grass
bctx.drawImage(bgimg,0,0,vw,vh);
bctx.drawImage(gimg,-vw*.25,vh-(vh/2),vw*1.5,vh/2);



}


function drawprompt(){
  clearcanv(bctx);
  bgdraw();
  bctx.drawImage(cimg,vw/4,-150,vw,vh*.6);
  bctx.fillStyle = "white";
  bctx.font = "40px Arial";
  bctx.fillText(gs.puzzle.target,vw/2,100);
}



//draw loop
function draw(timepast){
clearcanv(uctx);
dt = (timepast-lastt);
lastt = timepast;

draw_anim(dt);

for (let s of gs.stones){

 drawstone(s);
}


window.requestAnimationFrame(draw);
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


//input functions
function mdown(mpos){
console.log("touch started at " + mpos[0] + "," + mpos[1]);
//uctx.fillStyle = "rgba(255,255,255,.9)";
//uctx.fillRect(mpos[0]-5,mpos[1]-5,10,10);
for (let s of gs.stones){
 if (sqrmag(s.x,s.y,mpos[0],mpos[1]) < (32 * 32)){
   curstone = s;
   console.log("picked up " + s.text);
 }
}
}

function mup(mpos){
console.log("touch ended at " + mpos[0] + "," + mpos[1]);
trydrop(mpos[0],mpos[1]);
}

function trydrop(x,y){
if (curstone != null){
 console.log("dropped " + curstone.text);

 if (sqrmag(x,y,vw/2,vh/2) < (4000)){

   console.log("dropped on monster " + curstone.text);
   tryeat();

   curstone = null;

 }
 else{
   console.log(curstone.text + " snapped back to original position");
   curstone.x = curstone.origx;
   curstone.y = curstone.origy;
   curstone = null;

   mobj.source = mspr;
   mobj.current = 1;
   mobj.anim = true;
 }


}
}

function tryeat(){
console.log("trying to eat " + curstone.text);

if (curstone.text === gs.puzzle.target){
  console.log("right letter!");
  mobj.source = meat;
  mobj.current = 0;
  mobj.anim = true;
  curstone.x = -999;
  curstone.y = -999;
  curstone = null;
}
else{
  console.log("wrong letter");
  mobj.source = mspit;
  mobj.current = 0;
  mobj.anim = true;
  curstone.x = curstone.origx;
  curstone.y = curstone.origy;
  curstone = null;
}

}

function mmove(mpos){
if (curstone != null){
 mobj.source = meat;
 mobj.current = 3;
 mobj.anim = false;
 curstone.x = mpos[0];
 curstone.y = mpos[1];
}

}



//letter stone object
function stone(txt,x=-1,y=-1){
this.x = x;
this.y = y;
this.origx = x;
this.origy = y;
this.drawready = false;
this.text = txt;
this.img = new Image();
this.img.src = 'https://raw.githubusercontent.com/curiouslearning/FeedTheMonster/master/Feed%20the%20Monster/Assets/Art/Game%20Objects/Stones/Stone_pink_new_01.png';


}


function drawstone(s){
  uctx.drawImage(s.img,s.x-32,s.y-32,64,64);
  uctx.fillStyle = "white";
  uctx.font = "20px Arial";
 uctx.fillText(s.text,s.x - 9,s.y + 8);
}






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
