var orad = 10;
var irad = orad * 0.866025404;
var hrad = orad * 0.5;

var gw = 20;
var gh = 20;

var canvasnw = gw * (irad * 2) + irad ;
var canvasnh = gh * (orad*1.5) + irad;

var imax = 999999999;




var corners = [
    [0,orad],
    [irad,  hrad],
    [irad,  -hrad],
    [0,-orad],
    [-irad,  -hrad],
    [-irad,  hrad],
    [0,orad]
]








function createhexgrid(){
    var n = 0;

    setrandoms();

    
        for (var j = 0; j <gh;j++){
            for (var i = 0; i <gw;i++){
            var nh = new o_hexcell(i,j,n++);
           
            updatehexpos(nh)
            setHexData(nh);
             g.hexgrid.push(nh);
        }
    }

    for (var h of g.hexgrid){
        updateneighbors(h);
    }

}

function setrandoms(){
    g.xo1 = randintinc(1,25);
    g.xo2 = randintinc(1,25);
    g.xo3 = randintinc(1,25);
    g.yo1 = randintinc(1,25);
    g.yo2 = randintinc(1,25);
    g.yo3 = randintinc(1,25);
    g.hs1 = randintinc(1,3)/(randintinc(1,6));
    g.hs2 = randintinc(1,3)/(randintinc(1,6));
    g.hs3 = randintinc(1,3)/(randintinc(1,6));
    g.vs1 = randintinc(1,3)/(randintinc(1,6));
    g.vs2 = randintinc(1,3)/(randintinc(1,6));
    g.vs3 = randintinc(1,3)/(randintinc(1,6));
}




function pixtohex(cx,cy){
    var ret = null;
    for (var h of g.hexgrid){
        var sqrdist = (cx - h.px)*(cx-h.px) + (cy - h.py)*(cy-h.py);
        if (sqrdist < Math.pow((irad),2)){
            ret = h;
        }
    }
   return ret;
}

function updatehexpos(h){
    var hx = h.hx;
    var hy = h.hy;
    
    h.ax = hx - Math.floor(hy/2);
    h.ay = hy;
    h.az = (-h.ax - h.ay);

    h.px = (hx + (hy/2) - Math.floor(hy/2) )* (2 * irad);
    h.py = (hy )* (1.5 * orad );

    h.px += irad + 1;
    h.py += orad ;
    
    h.corns = hexcorns(h);
    h.neighbors = [null,null,null,null,null,null]


}

function updateneighbors(h){

    if (h.hx > 0){
        h.neighbors[4] = h.i - 1;
        g.hexgrid[h.i - 1].neighbors[1] = h.i
    }
    if (h.hy > 0){
        if (h.hy%2 == 0){
            h.neighbors[0] = h.i - gw;
            g.hexgrid[h.i - gw].neighbors[3] = h.i;

            if (h.hx > 0){
                h.neighbors[5] = h.i - gw - 1;
                 g.hexgrid[h.i - gw - 1].neighbors[2] = h.i;
            }
        }
        else{
            h.neighbors[5] = h.i - gw;
            g.hexgrid[h.i-gw].neighbors[2] = h.i;

            if (h.hx < gw - 1){
                h.neighbors[0] = h.i - gw + 1;
                g.hexgrid[h.i - gw + 1].neighbors[3] = h.i;
            }



          
        }
    }
}

function updateDistancesTo(h){
      var frontier = [];
    var current = null;
    for (var ih of g.hexgrid){
        ih.distfromsel = imax;
    }
    h.distfromsel = 0;
    frontier.push(h);
    while (frontier.length>0){
        current = frontier.shift();
        for (var nh of current.neighbors){
            if (nh != null ){
                if (g.hexgrid[nh].landtype != "water"){
                    var newd = current.distfromsel + tcosts[g.hexgrid[nh].landtype];
                    if (g.hexgrid[nh].distfromsel > newd){
                        g.hexgrid[nh].distfromsel = newd;
                        
                        if (newd < buildlimit){
                            drawhighlight(g.hexgrid[nh]);
                             uihighlights.push(nh);
                        }
                        frontier.push(g.hexgrid[nh])
                    }    
                }
                else{
                    g.hexgrid[nh].distfromsel = imax;
                }  
            }   
        }
    }
}

function search(h1,h2,mode="build"){
    var nt = null;
    var frontier = [];
    var current = null;
    
        for (var ih of g.hexgrid){
            ih.distfromsel = imax;
            ih.selpathfrom = null;
        }
    
    
    var h = g.hexgrid[h1];
    h.distfromsel = 0;
    frontier.push(h);

    while (frontier.length>0){
        current = frontier.shift();

        if (current.i == h2){
            //we DID IT!!!!
            nt = []
             nt.push(current.i);
            while (current.i != h1){
               
                current = g.hexgrid[current.selpathfrom];
                 nt.push(current.i);

            }
            
        }
        var options = current.neighbors;
        if (mode == "navigate"){
            options = [];
            
            for (var rrn in current.rrs){
                if (current.rrs[rrn]){
                    options.push(current.neighbors[rrn])
                }
            }
           
        }
        
        for (var nh of options){
            if (nh != null && (nh != h1) ){

                
                    if (g.hexgrid[nh].landtype != "water"){
                  
                   
                          var newd = current.distfromsel + tcosts[g.hexgrid[nh].landtype];
                            if (g.hexgrid[nh].distfromsel > newd){
                        g.hexgrid[nh].distfromsel = newd;
                       
                         g.hexgrid[nh].selpathfrom = current.i;
                         
                            frontier.push(g.hexgrid[nh])
                         
                          
                        }    
                    
                    
                    }
                    else{
                        g.hexgrid[nh].distfromsel = imax;
                    }  
         
                
            }   
        }
    }
    if (nt != null){
        if (mode=="build"){
            console.log(buildlimit);
            
            console.log(buildlimit);
            addnewtrack(nt);
            nextturn();
        }
        if (mode=="navigate"){
            //nt is new route
            console.log("returning " + nt);
            return nt;
        }
        
           
    }
}

function distfrom(ih,h){
    return ((ih.ax < h.ax ? h.ax - ih.ax : ih.ax - h.ax) +
			(ih.ay < h.ay ? h.ay - ih.ay : ih.ay - h.ay) +
			(ih.az < h.az ? h.az - ih.az : ih.az - h.az))/2;
}


function hexcorns(h){
    var ret = [];
    for(var c of corners){
        ret.push([h.px + c[0],h.py + c[1]]);
    }
    return(ret);
}

