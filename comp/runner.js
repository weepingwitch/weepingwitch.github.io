
function execute(ast){


  var bout = emit(ast);

  //var cbout = WebAssembly.compile(bout);

    addto(bodiv,toHexString(bout));
    addto(bdodiv,bout.join(","));


 //var newWin = open('','windowName','height=300,width=300');
 var payload = "";

payload += "const code = [";
payload += bout.join(",");
payload += "];var icode = new Uint8Array(code);";
payload += "WebAssembly.instantiate(icode).then(result => result.instance.exports.main()).then(result =>{document.write(result);});";

WebAssembly.instantiate(bout).then(result => result.instance.exports.main()).then(result =>{console.log(result);addto(rdiv,result);});



}



function executeBytes(barry){
  barry = barry.split(",");
  addto(bodiv,toHexString(barry));
  const bout = new Uint8Array(barry);

  addto(bdodiv,barry.join(","));
  var cbout = WebAssembly.compile(bout);
  var res =  WebAssembly.instantiate(bout).then(result =>
 result.instance.exports.main()
  ).then(result =>
   {

    addto(rdiv, result);
    console.log(result);

  }
);



}
