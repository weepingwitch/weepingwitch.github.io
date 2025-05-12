function genCodeFromAST(ast){
  var fcode = [];
  var mainf = ast;
  for (let statm of mainf){
    console.log("going thru statements");
    console.log(statm);
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
    console.log(statm.value)
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
    console.log("visiting return");
    var code = [];
    code.push( ...visitStat(uno.rhs));
    code.push(opc.return);
    return code;
  }
  if(uno.value == Ttype.neg){
    console.log("visiting neg");
    var code = [];
    code.push( ...visitStat(uno.rhs));
    code.push(opc.i32sub);
    code.push(opc.i32const);
    code.push(leb128(0));
    return code;

  }
}
