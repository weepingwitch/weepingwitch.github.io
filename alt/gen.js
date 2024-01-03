var locgen;
var timegen;
var gdiv = document.getElementById("gendata");

function randSeed(seed) {
    var m = 2**35 - 31
    var a = 185852
    var s = seed % m
    return function () {
        return (s = s * a % m) / m
    }
}

function startGenerator(){
    getLocation();
}

function initGeo(locseed){
    locgen = randSeed(locseed);
    timegen = randSeed(getTime());
    genData();

}

function genData(){
    
    
    var georand = "";
    for (var i=0;i<6;i++){
        georand += String.fromCharCode(97+Math.floor(locgen() * 26));
    }
    
    var timerand = "";
    for (var i=0;i<6;i++){
        timerand += String.fromCharCode(97+Math.floor(timegen() * 26));
    }
    gdiv.innerHTML += georand + "<BR>" + timerand;
    

}