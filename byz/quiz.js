
var gdiv = document.getElementById("gameWrap");
var rdiv = document.getElementById("endWrap");

function grademe(){
    // arian
    // orthodox
    // docetism
    var ascore = 0;
    var oscore = 0;
    var dscore = 0;

    var answeights = [
        [[4,1,0],[1,3,0],[0,3,1],[0,0,35]], 
        [[1,2,0],[2,1,0]],
        [[0,0,0],[0,2,0],[2,0,0],[0,0,0]],
        [[0,5,0],[5,0,5]],
        [[5,0,0],[0,5,5],[2,4,0],[0,0,15]],
        [[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
        [[6,0,0],[2,2,15],[4,4,0],[0,6,0]],
        [[0,2,4],[4,0,0],[4,0,0],[0,4,2]],
        [[0,5,0],[5,0,0],[0,0,15],[0,0,0]],
        [[0,4,0],[4,0,0]],
        [[2,0,0],[0,2,0]]
    ];

    var scores = [ascore,oscore,dscore];

    var numqs = 11;
    var ans = [];
    for (var i=0; i<numqs;i++){
        var an =document.querySelector('input[name="q' + i + '"]:checked');
        if (an!=null){
            an = an.value;
            an = parseInt(an);
            ans.push(an);
            var w = answeights[i][an];
            ascore += w[0];
            oscore += w[1];
            dscore += w[2];
        }
        
    }

    console.log(an);
    var anstr = "a: " + ascore + " - o: " + oscore + " - d: " + dscore;
    console.log(anstr);
    var winner = "orthodox";
    if ((dscore > ascore)&&(dscore>oscore)){
        winner = "docetism";
    }
    else if (ascore > oscore){
        winner = "arianism";
    }

    var resbox = document.getElementById("resdiv");
    resbox.innerHTML = "";

    switch (winner) {
        case "docetism":
            resbox.innerHTML += "<h1>Docetism</h1>";
            resbox.innerHTML += "<B><i>You Heretic!</i></b><BR>"
            resbox.innerHTML += "";
            break;
        case "arianism":
            resbox.innerHTML += "<h1>Arianism</h1>";
            resbox.innerHTML += "<B><i>You Heretic!</i></b><BR>"
            resbox.innerHTML += "";
            break;
        case "orthodox":
            resbox.innerHTML += "<h1>Orthodoxy</h1><BR>";
            resbox.innerHTML += "";
            
        default:
            break;
    }

    gdiv.style.display = "none";
    rdiv.style.display = "block";


}

function goback(){
    rdiv.style.display = "none";
    gdiv.style.display = "block";
}