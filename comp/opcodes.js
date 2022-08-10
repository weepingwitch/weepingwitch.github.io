var ot = {
  "func":0x60,
  "i32":0x7f
}

var opc = {
  "end":0x0b,
  "i32const":0x41,
  "f32const":0x43,
  "i32add":0x6a,
  "i32sub":0x6b,
  "return":0x0f,


}

const floatrep = (n) => {
  var buffer = new ArrayBuffer(4);

var view = new DataView(buffer);
view.setFloat32(0, n, true);

console.log(buffer);

  return new Uint8Array(buffer);
}

const unsignedLEB128 = (n) => {
  const buffer = [];
  do {
    let byte = n & 0x7f;
    n >>= 7;
    if (n !== 0) {
      byte |= 0x80;
    }
    buffer.push(byte);
  } while (n !== 0);
  return buffer;
};



const decodeSignedLeb128 = (input) => {
  let result = 0;
  let shift = 0;
  while (true) {
    const byte = input.shift();
    result |= (byte & 0x7f) << shift;
    shift += 7;
    if ((0x80 & byte) === 0) {
      if (shift < 32 && (byte & 0x40) !== 0) {
        return result | (~0 << shift);
      }
      return result;
    }
  }
};

const flatten = (arr) => [].concat.apply([], arr);
