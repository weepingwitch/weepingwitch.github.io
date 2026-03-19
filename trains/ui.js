var ddiv = document.getElementById("statstext");
var cdiv = document.getElementById("controlstext")

var drawres = false;

var clickmode = "click1";
var imode= "buildtrack";
cmode.innerHTML = imode;

function btbutton(){
   
    updateinfopane(null);
    imode = "buildtrack";
    cmode.innerHTML = imode;
    clickmode = "click1";
}

function ntbutton(){
    nextturn();
}

function bcbutton(){
     // g.uc.clearRect(0,0,canvasw,canvash);
      clickmode = "click1";
      imode = "buildcity";
      cmode.innerHTML = imode;
}

function nextturn(){
    //  g.uc.clearRect(0,0,canvasw,canvash);
    buildlimit = ntbuildlimit;
}



var uihighlights = [];
var c1h = null;
var c2h = null;

var inspected = null;
var hovered = null;

function click(h){
    if (h!= null){

      switch (imode) {
        default:
        case "inspect":
            updateinfopane(h);
            break;
        case "buildcity":
            console.log("considering a city");
            console.log(g.cities);
            console.log(h.i);
            if (hastrains(h) && !(g.cities.includes(h.i))){
                console.log("new city!")
                g.cities.push(h.i);
                drawall();
                updateinfopane(h);
                addnewtrain(h.i);
            }
            break;
        case "buildtrack":
            updateinfopane(h);
              switch (clickmode) {
            default:
            case "click1":

                if (h.landtype != "water"){
                    if  (hastrains(h)){
                          updateDistancesTo(h);
                
                    c1h = h.i;
                    
                
                    clickmode = "click2"
                    inspected = h;
                   
                    uihighlights.push(h.i);
                    }
                   
                }
                 
                break;

            case "click2":
                if (h.landtype != "water"){
                    clickmode = "click1"
                    if (h.i != c1h){
                        console.log("trying to build, " + buildlimit );
                        console.log(h.distfromsel);
                        if (uihighlights.includes(h.i)){
                             c2h = h.i
                             search(c1h,c2h);
                            inspected = null;
                             //  g.uc.clearRect(0,0,canvasw,canvash);
                               uihighlights = [];
                        }
                        else{
                            console.log("too long");
                        }
                       
                    }
                  // g.uc.clearRect(0,0,canvasw,canvash);
                    uihighlights = [];
                  
                    
                }
                
                
                    break;
            
        }
        console.log(clickmode);
            break;
            
      }

      
       
      
      
      
    }

}

function updateinfopane(h){
 if (h!= null){
   
  
    ddiv.innerHTML = h.i + "<BR>"
    ddiv.innerHTML += h.hx + "," + h.hy + "; "  + h.landtype + "<BR>" + JSON.stringify(h.res);
    ddiv.innerHTML += "<BR>" + JSON.stringify(h.neighbors) + "<BR>" + JSON.stringify(h.rrs);
    }
    else{
        ddiv.innerHTML = "x<BR>x<BR>x<BR>x<BR>x";
        hovered = null;
    }
}
function mousemove(h){
    hovered = h;updateinfopane(h);
   
}