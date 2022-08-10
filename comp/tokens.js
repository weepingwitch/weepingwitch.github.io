function Token(type, value, line, col){
  this.type = type;
  this.typename = type.name;
  this.value = value;
  this.line = line;

  this.col = col;


}

class Ttype {

  static rbracket = new Ttype("rbracket");
  static lbracket = new Ttype("lbracket");
  static semi = new Ttype("semi");
  static cint = new Ttype("cint");
  static gvar = new Ttype("gvar");
  static ireturn = new Ttype("ireturn");
  static eof = new Ttype("eof");
  static neg = new Ttype("neg");
  static not = new Ttype("not");
  static bitcomp = new Ttype("bitcomp");
  static assign = new Ttype("assign");


  constructor(name) {
    this.name = name
  }
}
