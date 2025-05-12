var curptok = null;
var toks = [];



function eat(exptoktype){

  if (curptok == null){
    fail("no token to eat, expected" + exptoktype.name);
  }
  if(curptok.type == exptoktype){
    console.log("ate " + curptok.value);
    curptok = toks.shift();
  }
  else{
    fail("expected " + exptoktype.name + ", got " + curptok.typename + ": " + curptok.value + " " + curptok.line, + ":" + curptok.col);
  }
}


function parseFunction(){
  eat(Ttype.lbracket);
  let res = [];
  let node = parseStatement();
  res.push(node);
  while (curptok.type == Ttype.semi){
    eat(Ttype.semi);
    if (curptok.type != Ttype.rbracket)
    {
      res.push(parseStatement());

    }
  }
  return res;
}

function parseStatement(){
  let node = parseTerm();
  return node;
}

function parseTerm(){
  let node = parseFactor();
  return node;
}

function parseFactor(){
  let cptype = curptok.type;
  let cp = curptok;
  if (cptype == Ttype.ireturn){
    eat(Ttype.ireturn);
    let rhs = parseStatement();
    let res = new ASTnode(Ntype.unaryop, cptype);
    res.rhs = rhs;
  
    return res;
  }
  if (cptype == Ttype.cint){
    eat(Ttype.cint);
    let res = new ASTnode(Ntype.cint, cp.value);
    return res;
  }
  if (cptype == Ttype.neg){
    eat(Ttype.neg);
    let rhs = parseStatement();
    let res = new ASTnode(Ntype.unaryop,cptype);
    res.rhs = rhs;
    return res;

  }

}

function parseNothing(){
  return new ASTnode(Ntype.noop,'');
}


function parseTokensToAST(tokenlist){
   toks = tokenlist;
   curptok = toks.shift();

   var statems = parseFunction();
   let adiv = document.getElementById("astdiv");
   for (let i of statems){
     addto(adiv, JSON.stringify(i,null,1));
   }
   return statems;





}
