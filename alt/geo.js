var x = document.getElementById("locinfo");

function getPosition() {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

function getLocation() {
    if (navigator.geolocation) {
        getPosition()
        .then((position) => {
            parseLoc(position);
            
        })
        .catch((err) => {
            console.error(err.message);
            initGeo(0);
        });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
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
    showPosition(pos);
    var seedstring = "" + dlat + "" + dlong;
    x.innerHTML += "<BR>"  + seedstring;
    initGeo(seedstring);


}