var lcolors = {}

var buildlimit = 8;
var ntbuildlimit = 8;

var directions = ["NE","E","SE","SW","W","NW"];

var tcosts = {"grass":1,"sand":2,"forest":3,"snow":4,"rocks":5}

 g.hexgrid = [];

g.trains = [];

g.cities = [];


function o_hexcell(x,y,n){
    this.hx = x;
    this.hy = y;
    this.i = n;

    this.distfromsel = 0;
    this.selpathfrom = null;
   
    this.res = {r:0,g:0,b:0}
    this.neighbors = [];
    this.rrs = [false,false,false,false,false,false];
    
}



function o_train(h,n){
    this.i = n;
    this.px = h.px;
    this.py = h.py;
    this.gx = h.px;
    this.gy = h.py;
    this.speed = 5;
    this.targets = [];
    this.destinations = [];
    this.cars=[[h.px,h.py],[h.px,h.py],[h.px,h.py]];
    this.mode = "ready";
}

function o_car(x,y,n,ti){
    this.i = n;
    this.t = ti;
    this.px = x;
    this.py = y;
}


function initialsetup(){
    var starts = [84,93,284,334,209]

    var init = randfrom(starts);
            g.cities.push(init);
            g.hexgrid[init].landtype = randfrom(["grass","grass","grass","grass","sand","sand"]);
            g.hexgrid[init+1].landtype = randfrom(["grass","grass","grass","grass","sand","sand"]);
               search(init,init+1);
            
            g.hexgrid[init+2].landtype = randfrom(["grass","grass","grass","grass","sand","sand"]);
             search(init+1,init+2);
            
            g.hexgrid[init+2 - gw].landtype = randfrom(["grass","grass","grass","grass","sand","sand"]);
            search(init+2,init+2-gw)
            var scnd = init + 2 - gw - gw + 1;
         
            g.hexgrid[scnd].landtype = randfrom(["grass","grass","grass","grass","sand","sand"]);

   
     search(init+2 - gw,scnd);
     console.log("trackpt3");
    g.cities.push(scnd);
 


                addnewtrain(init);
}

function hastrains(h){
    var ret = false;
    for (var ir of h.rrs){
     
        ret = (ret || ir);
    }
    return ret;
}

function addnewtrain(h){
    var ntn = g.trains.length;
    var nto = new o_train(g.hexgrid[h],ntn);
    console.log(nto.px);
    nto.destinations.push(lastcity.i);
    nto.destinations.push(firstcity);
    g.trains.push(nto);
}

function moveTrain(t){
    
    if (t.mode == "ready"){
        //find a new route
        var tar = g.hexgrid[randfrom(g.cities)];
        
        t.targets = search(pixtohex(t.px,t.py).i,tar.i,"navigate");
         var newt = g.hexgrid[t.targets.pop()];
                t.gx = newt.px;
                t.gy = newt.py;
                t.mode = "moving"
    }   
    if (t.mode == "moving"){
        if (sqrdist(t.px,t.gx,t.py,t.gy) <1){
           //reached target coords
            
            if (t.targets.length > 0){
                //move on to next target
                var newt = g.hexgrid[t.targets.pop()];
                t.gx = newt.px;
                t.gy = newt.py;
              
            }
            else{
                //end of the line
              
                t.mode = "ready";
            }
        }
        else{
           
            //increment t position along the way to target
            
            var movd = normalizeddif(t.px,t.py,t.gx,t.gy);
            
            var mdm =  t.speed * dt * .001;
            movd[0] = movd[0] * mdm;
            movd[1] = movd[1] * mdm;
          
            t.px += movd[0];
            t.py += movd[1];

            if (sqrdist(t.px,t.cars[0][0],t.py,t.cars[0][1])>7){
                t.cars[2] = t.cars[1] ;
                t.cars[1] = t.cars[0] ; 
                t.cars[0] = [t.px,t.py];
            }
            
          


        }



        

    }
}

function iswet(h){
    var ret = false;
    for (var ir of h.neighbors){
     
        ret = (ret || (g.hexgrid[ir].landtype=="water"));
    }
    return ret;
}
var firstcity;

var lastcity;

function addnewtrack(nt){
    
            console.log(nt);
            if (nt.length < 2){
                console.log("too short");
            }else{
                firstcity = nt[0];
                for (var i = 0; i < nt.length-1; i++){
                    var p1 = nt[i];
                    var p2 = nt[i+1];

                    for (var pn in g.hexgrid[p1].neighbors){
                        if (p2 == g.hexgrid[p1].neighbors[pn]){
                            if( g.hexgrid[p1].rrs[pn] == false){
                                buildlimit -= tcosts[g.hexgrid[p1].landtype];
                            }
                            g.hexgrid[p1].rrs[pn] = true;
                        }
                    }

                    for (var pn in g.hexgrid[p2].neighbors){
                        if (p1 == g.hexgrid[p2].neighbors[pn]){
                            g.hexgrid[p2].rrs[pn] = true;
                        }
                    }

                    lastcity =  g.hexgrid[p2];
                    


                }
               
               
                console.log("cities: " + g.cities);
                
                //added!
                drawall();
                console.log(firstcity);

            }
            
}


function setHexData(h){
    h.landtype = randfrom(["grass","grass","grass","grass","sand","sand","forest","rocks","water","sand","snow","forest"]);



var hx = h.hx;
var hy = h.hy;

h.res.r = (Math.max((Math.sin((hx+g.xo1)*g.hs1) + 0.4),0) * (255/4)) +  (Math.max((Math.cos((hy+g.yo1)*g.vs1) + 0.4),0) * (255/4));
h.res.g =  (Math.max((Math.sin((h.az+g.xo2)*g.hs2) + 0.4),0) * (255/4)) +  (Math.max((Math.cos((hy+g.yo3)*g.vs2) + 0.4),0) * (255/4));
h.res.b =  (Math.max((Math.sin((h.ax+g.xo3)*g.hs3) + 0.4),0) * (255/4)) +  (Math.max((Math.cos((hy+g.yo3)*g.vs3) + 0.4),0) * (255/4));


}
