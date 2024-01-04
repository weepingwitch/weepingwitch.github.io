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

const cyrb53 = (str, seed = 42) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

function startGenerator(){
    getLocation();
}

function initGeo(locseed){
    locgen = randSeed(cyrb53(locseed));
    timegen = randSeed(cyrb53(getTime()));
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