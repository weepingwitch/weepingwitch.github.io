

var linenum = 1;
var colnum = 0;
var errbreak = false;
var curchar;
var nextchar;
var pos = -1;
var text;
var itext;


var mwords = {
'give':Ttype.ireturn,
'offer':Ttype.ireturn,
'return':Ttype.ireturn,
'↩️':Ttype.ireturn,

'not':Ttype.not,
'neg':Ttype.neg,
'negative':Ttype.neg,
'bitcomp':Ttype.bitcomp,
'assign':Ttype.assign

}


function skipcomment(){
  console.log("found a comment");
  while(curchar != null && curchar != '#'){
    advance();
  }
  advance();
}

function skipwhitespace(){
  console.log("skipping whitespace");
  while (curchar != null && (' \t\n\r\v'.indexOf(curchar) > -1) )
  {
    if (curchar == '\n'){
      console.log("found a newline");
      linenum += 1;
      colnum = 1;

    }

    advance();
  }

}

function GetNextToken(){
while (curchar != null && !errbreak){
  if (curchar == '#'){
    advance();
    skipcomment();
    continue;
  }
  if (' \t\n\r\v'.indexOf(curchar) > -1){
    skipwhitespace();
    continue;
  }
  if (curchar == '{'){
    advance();
    return new Token(Ttype.lbracket,'{',linenum,colnum);
  }
  if (curchar == '}'){
    advance();
    return new Token(Ttype.rbracket,'}',linenum,colnum);
  }
  if (curchar == ';'){
    advance();
    return new Token(Ttype.semi,';',linenum,colnum);
  }
  if (curchar == "&"){
    advance();
    return LexMagicWord();
  }
  if (curchar == "@"){
    advance();
    return LexVar();
  }
  if (curchar == "i" || curchar == "#️⃣" || curchar == "🔢"){
    advance();
    return LexInt();
  }
  if (curchar == "-"){
    advance();
    return new Token(Ttype.neg,'-',linenum,colnum);
  }
  if (curchar == "~"){
    advance();
    return new Token(Ttype.bitcomp,'~',linenum,colnum);
  }
  if (curchar == "!"){
    advance();
    return new Token(Ttype.not,'!',linenum,colnum);
  }

  fail("unknown token on " + linenum + ":" + colnum + ": " + curchar);

}
if (!errbreak){
  return new Token(Ttype.eof,null,linenum,colnum);
}


}

function LexInt(){
  var res = '';
  while (curchar != null && isNumber(curchar)){
    res += '' + curchar + '';
    advance();
  }
  var rn = parseInt(res,10);
  return new Token(Ttype.cint,rn,linenum,colnum);
}

function LexVar(){
  var word = '';
  while (curchar != null && isLetter(curchar)){
    word += curchar;
    advance();
  }
  console.log("magic word encountered: " +  word);
  word = word.toLowerCase();
  return new Token(Ttype.gvar,word,linenum,colnum);
}

function LexMagicWord(){
  var word = '';
  while (curchar != null && isLetter(curchar)){
    word += curchar;
    advance();
  }
  console.log("magic word encountered: " +  word);
  word = word.toLowerCase();
  if (word in mwords){
    console.log("matched.");
    return new Token(mwords[word],word,linenum,colnum);
  }
  else{
    errbreak = true;
    console.log("illegal word !!!! could not match.");
    console.log(linenum + ":" + colnum);
  }
}

function makeListOfTokens(source){
  linenum = 1;
  pos = -1;
  colnum = 0;
  console.log("starting list");
  var toks = [];


  text = source.replace(/\r?\n|\r/g,"\n");
  itext = [...text];

  advance();
  var curtok = GetNextToken();
  while (curtok.type != Ttype.eof){
    toks.push(curtok);
    curtok = GetNextToken();

  }

  let tdiv = document.getElementById("tokendiv");
  for (let t of toks){
    addto(tdiv, t.value + "(" + t.type.name + ")" + " · ");
  }
  return toks;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
function isNumber(c) {
  return c >= '0' && c <= '9';
}


function peek(){
  var ppos = pos + 1;
  if (ppos >= (text.length)){
    return null;
  }
  else{
    return itext[ppos];
  }
}

function advance(){
  pos += 1;
  colnum += 1;
  if (pos >= (text.length)){
    curchar = null;
  }
  else{
    curchar = itext[pos];
  }
}
