var x = document.getElementById("locinfo");
var sl;

function getPosition() {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

function getLocation() {
    if (navigator.geolocation) {
        log("has geolocation, getting");
        getPosition()
        .then((position) => {
            log("geo successful");
            parseLoc(position);
            
        })
        .catch((err) => {
            console.error(err.message);
            log("failed to get geo");
            initGeo(0);
        });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    log("no geolocation");
      initGeo(0);
    }
  }

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude;
}

function parseLoc(pos){
    var dlat = pos.coords.latitude;
    var dlong = pos.coords.longitude;
    dlat = Math.abs(dlat);
    dlat  = dlat.toFixed(3);
    dlat = dlat.replace(".","");
    dlat = dlat.padStart(5,"0");
    dlong = Math.abs(dlong);
    dlong = dlong.toFixed(3);
    dlong = dlong.replace(".","");
    dlong = dlong.padStart(6,"0");
    log("parsed geo");
    showPosition(pos);
    var seedstring = "" + dlat + "" + dlong;
    seedstring = parseInt(seedstring).toString(36);
    x.innerHTML += "<BR>"  + seedstring;

    
    if (localStorage.hasOwnProperty("savedlocs")){
        
        sl = localStorage.getItem("savedlocs");
        sl = JSON.parse(sl);
        if (sl.includes(seedstring)){
            //already been here

        }
        else{
            //first time being here
            sl.push(seedstring);
            localStorage.setItem("savedlocs",JSON.stringify(sl));
        }
        x.innerHTML += "<BR>" + sl;
    
    }
    else{
        //first time being somewhere;
        var sl = [];
        sl.push(seedstring);
        localStorage.setItem("savedlocs",JSON.stringify(sl));
    }
    console.log(sl);
    console.log(sl.length);



    initGeo(seedstring);


}