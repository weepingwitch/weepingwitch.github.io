function magnitude(x,y){
    return Math.sqrt((x*x)+(y*y));  
}

function normalize(x,y){
    var m = magnitude(x,y);
    x = x/m;
    y = y/m;
    return [x,y];
}