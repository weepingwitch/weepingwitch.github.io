var tdiv = null;
var adiv = null;
var bodiv = null;
var rdiv = null;


function syncdivs(){
  if (tdiv == null){
    tdiv = document.getElementById("tokendiv");
    adiv = document.getElementById("astdiv");
    bodiv = document.getElementById("bhodiv");
    bdodiv = document.getElementById("bdodiv");
    rdiv = document.getElementById("rdiv");
  }
}


function addto(where, val){
  syncdivs();
  where.innerHTML += val;
}

function cleardivs(){
  syncdivs();
  tdiv.innerHTML = "";
  adiv.innerHTML = "";
  bodiv.innerHTML = "";
  bdodiv.innerHTML = "";
  rdiv.innerHTML = "";
  console.clear();
}

function compilebutton(){
  cleardivs();
  execute(
  genCodeFromAST(
  parseTokensToAST(
    makeListOfTokens(
      document.getElementById('codeinput').value)
    )
  )
);


}

function rawbutton(){
  cleardivs();
  executeBytes(document.getElementById('codeinput').value);
}
