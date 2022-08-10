function genCodeFromAST(ast){
  var fcode = [];
  var mainf = ast;
  for (let statm of mainf){
    console.log("going thru statements");
    fcode = fcode.concat(...visitStat(statm));
  }
  fcode.push(opc.end);
  //console.log(fcode);
  return fcode;
}

function visitStat( statm){
  console.log("visiting statement");
  console.log(statm);
  if (statm.type == Ntype.unaryop){
    console.log("trying to visit unary");
    return visitUnary(statm);
  }
  else if (statm.type == Ntype.cint){
    console.log("trying to visit constant");
    var code = [];
    code.push(opc.i32const);
    code.push(leb128(statm.value));
    return code;
  }
  else{
    console.log("can't figure out what to visit");
  }
}

function visitUnary(uno){
  console.log("visiting unary");
  console.log(uno);
  if (uno.value == Ttype.ireturn){
    var code = [];
    code.push( ...visitStat(uno.rhs));
    code.push(opc.return);
    return code;
  }
}
