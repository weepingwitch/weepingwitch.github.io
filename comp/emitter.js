const magicModuleHeader = [0x00, 0x61, 0x73, 0x6d];
const moduleVersion = [0x01, 0x00, 0x00, 0x00];


function emittypes(){
  //types -- one type, it's a func, 0params, 1 res, res type
  return [0x01,  ...enchunk([1, ot.func, 0, 1, ot.i32])];
}

function emitfuncs(){
  //funcs - one func, index 0
  return [0x03,   ...enchunk([1, 0])];

}

function emitmem(){
  return [0x05,...enchunk([1,0,1])];
}

function emitexps(){
    // exps - 2  exp, named main, func kind 0, func index 0
    return [0x07, ...enchunk([2,...enstr("memory") ,2,0 ,...enstr("main"), 0, 0])];
}

function emitcode(){
  return [10,...enchunk([  1,...emitfunc()])];
}

function emitfunc(oc = -1){
  //0 locals
  if (oc == -1){
    return [...enchunk([ 0, ...emitopcodes()])];
  }
  else{
    return [...enchunk([0, ...oc])];
  }
}

function emitopcodes(){
  //i32const, 69 in a little endian form i don't understand,return , end
  return [opc.i32const,...leb128(69),opc.return,opc.end];
}






function emit(nc){
  var decarray = [];
  //var code =  Uint8Array.from([...magicModuleHeader,...moduleVersion]);
   decarray = [...boilerplate];


console.log(decarray);
var cb = emitfunc(nc);
var cp = [10,...enchunk([1,...cb])];


decarray.push(...cp);
return new Uint8Array(decarray);


}
