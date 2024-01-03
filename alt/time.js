var tdiv = document.getElementById("timedata");
function getTime(){
    var curAccess = new Date();

    tdiv.innerHTML += "currently: " + curAccess.toUTCString();


    tdiv.innerHTML += "<BR>";

    var curh = curAccess.getUTCHours();
    tdiv.innerHTML += "hour " + curh + "<BR>";

    var tseed = curAccess.getUTCSeconds();
    tdiv.innerHTML += "secs " + tseed + "<BR>";


    if (localStorage.hasOwnProperty("lastViewed")){
        //get duration time
        var olddatestr = localStorage.getItem("lastViewed");
        var olddate = new Date(olddatestr);
        var elapsed = curAccess - olddate;
        tdiv.innerHTML += "elapsed: " + elapsed;

      
    }
    else{
        //first time !!!
        tdiv.innerHTML += "first time viewing!";

    }



    localStorage.setItem("lastViewed",curAccess);
    return tseed;
    
}