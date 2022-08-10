
function ASTnode(type, value){
  this.type = type;
  this.value = value;

}


class Ntype {

  static function = new Ntype("function");
  static expression = new Ntype("expression");
  static binaryop = new Ntype("binaryop");
  static unaryop = new Ntype("unaryop");
  static noop = new Ntype("noop");
  static cint = new Ntype("cint"); //int


  constructor(name) {
    this.name = name
  }
}
