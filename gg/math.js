function magnitude(x,y){
    return Math.sqrt((x*x)+(y*y));  
}

function normalize(x,y){
    var m = magnitude(x,y);
    x = x/m;
    y = y/m;
    return [x,y];
}

function randfrom(myarray){
    return myarray[Math.floor(Math.random() * myarray.length)];
}

function riinc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sqrdist(thing1,thing2){
    var mx = thing2.x - thing1.x;
    var my = thing2.y - thing1.y;
    return ((mx*mx)+(my*my));
}

function doesTouch(thing1,thing2){
    if (sqrdist(thing1,thing2) < ((thing1.r * thing1.r) + thing2.r*thing2.r))
    {
        return true;
    }
    else{
        return false;
    }
}