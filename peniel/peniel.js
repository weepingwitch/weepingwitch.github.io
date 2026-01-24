
var imgs = {};
imgs["begin"] = ["jabbok.jpg"] //0
imgs["black"] = ["black.png"] //01
imgs["eve+tree"] = ["cranach.jpg","rappaport.jpg","seebach.jpg","gauguin.jpg","12th.jpg","klimt.jpg"]
imgs["cain+abel"] = ["giovane.jpg", "ca.jpg","tornioli.jpg","leadeth.jpg","crespi.jpg","vergara.jpg","Rebull.jpg"]
imgs["abe+isaac"] = ["chagall.png","rome.jpg","bulgaria.jpg","woodcut.jpg","latvia.jpg","riminaldi.jpg","thys.jpg"] //3
imgs["jake+esau"] = ["gripping.webp","sketch.jpg","dunner.jpg","banner.jpg","motley.jpg"] //birth4
imgs["jake+isaac"] = ["black.png"] // =blessing5
imgs["jake+leah"]= ["iris.jpg","gilmont.jpg","rafel.jpg","tender.jpeg","venus.jpg","thankfulness.jpg"] //6
imgs["joe+bros"] = ["black.png"]//6
imgs["joe+wife"] = ["black.png"]//7
imgs["god+form"] = ["shigeru.png","wenceslas.jpg","Creation1.jpg","Creation2.jpg","Creation3.jpg","Creation4.jpg"]//9
imgs["angel"] = ["dore.jpg","jacobangel.jpg","moreau.jpg","hartmann.jpg","Berlin.jpg"]//10




var curimgar = null;
var curscene = null;
var adiv = document.getElementById("art");
var tdiv = document.getElementById("stext");
var bdiv = document.getElementById("choices");
bdiv.innerHTML = "<button id='advbut' class='button' onclick='butadvfn()'><span>...  </span></button>";
var btn = document.getElementById("advbut");
var sdiv = document.getElementById("scripture");


var dodecay = false;
var started = false;



function init(){

    chgscene(s0);
   
    anim();
}



function scene(imgarrrayname, scripture){
    this.imgarrrayname = imgarrrayname;
    this.scripture = scripture;
    this.dialogs = []
    this.di = -1;
    this.next = null;
    curscene = this;
}
function ad(dialogtxt, buttontext="..."){
    adb(dialogtxt,buttontext);
}
function adb(dialogtxt,buttontext){
     var newitem = [dialogtxt,buttontext]
    curscene.dialogs.push(newitem)
}
function chgscene(scene){

    curimgar = imgs[scene.imgarrrayname];

      curi = 0;
      icount = 0;

     adiv.style.backgroundImage = "url(img/" + curimgar[curi] + ")";


    resetscripture(scene.scripture);

    curscene = scene;
    advance();
    dodecay = false;

  




}
function butadvfn(){
    dodecay = true;
    advance();
    
   if(!started){
      document.getElementsByTagName("body")[0].style.webkitAnimationName="ccs";
    
 started = true;
 //play music
 const myAudio = document.createElement("audio");
myAudio.src = "peniel.mp3";
myAudio.play();
   }
    

}

function advance(){
      curscene.di += 1;
    if (curscene.dialogs.length > curscene.di){
        tdiv.innerHTML = curscene.dialogs[curscene.di][0];
        btn.innerText = curscene.dialogs[curscene.di][1];
    
    }
    else{
        if (curscene.next != null){
            chgscene(curscene.next)
        }
        else{
            document.getElementById("sources").style.display="block";
        }
    }
  

}

function resetscripture(text){
    sdiv.innerHTML = text;

}

function decay(){
    var scripture = sdiv.innerText;
    var slen = scripture.length;
    var i = randintinc(0,slen-1);
    var letter = scripture[i]
    
    var vnum = scripture.charCodeAt(i);

    if (vnum == 49){
        vnum = 97;
    }
    if (vnum >49 && vnum <= 57){
        vnum -= 1;
    }
    
    if (vnum >= 65 && vnum <=90)
    {
        vnum += 32;
    }


    if (vnum > 97 && vnum <= 122){
        vnum -= 1;
    }
   
    
   
    var newletter = String.fromCharCode(vnum);
  
    scripture[i] = newletter;
    var newscripture = scripture.slice(0,i) + newletter + scripture.slice(i+1,slen);
 
    sdiv.innerHTML = newscripture;
}

var curi=0;
function imgrotate(){

    curi++;
    if (curi >= curimgar.length){
        curi=0;
    }
    adiv.style.backgroundImage = "url(img/" + curimgar[curi] + ")";
}

var icount = 0;
var imax = 200;



function anim(){

   
        if (dodecay)
        decay(); 
     

    icount++;
    if (icount>imax){
        imgrotate(); 
        icount = 0;   
    }
    


    requestAnimationFrame(anim);
}

 function randintinc(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }