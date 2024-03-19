
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
            resbox.innerHTML += "<B><i style='color:red;'>You Heretic!</i></b><BR>"
            resbox.innerHTML += "You believe that Jesus wasn't actually human at all, and could best be described as some sort of divine apparition or hologram. ";
            resbox.innerHTML += "You have listened to Marcion's heresies, and believe that Christ was fully divine and not capable of suffering."
            break;
        case "arianism":
            resbox.innerHTML += "<h1>Arianism</h1>";
            resbox.innerHTML += "<B><i style='color:red;'>You Heretic!</i></b><BR>"
            resbox.innerHTML += "You believe that there was a time when the Son of God did not yet exist, and that he is not coeternal to the Father. ";
            resbox.innerHTML += "You have listened to Arius' heresies, and believe that Jesus is different from and subordinate to God."
            break;
        case "orthodox":
            resbox.innerHTML += "<h1>Orthodoxy</h1><BR>";
            resbox.innerHTML += "You hold correct and true beliefs!<BR>";
            resbox.innerHTML += "You believe that Christ is co-eternal and co-substantial with the Father, that God the Father and God the Son have both always existed and are equal in power. ";
            resbox.innerHTML += "You will not be denounced as a heretic!"
            
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