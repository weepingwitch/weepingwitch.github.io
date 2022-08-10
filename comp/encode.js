
function toHexString(byteArray) {
  var s = '';

  byteArray.forEach(function(byte) {
    s += ' 0x' + ('0' + (byte & 0xFF).toString(16)).slice(-2) + ",";
  });
  return s.substring(1).slice(0,-1);

}


const leb128 = (value) =>{
  return encodeSignedLeb128FromInt32(value);
}

const encodeSignedLeb128FromInt32 = (value) => {
  value |= 0;
  const result = [];
  while (true) {
    const byte = value & 0x7f;
    value >>= 7;
    if (
      (value === 0 && (byte & 0x40) === 0) ||
      (value === -1 && (byte & 0x40) !== 0)
    ) {
      result.push(byte);
      return result;
    }
    result.push(byte | 0x80);
  }
};

const enchunk = (data) => [
  ...leb128(data.length),
  ...data
];

const enstr = (str) => [
  ...leb128(str.length),
  ...str.split("").map(s => s.charCodeAt(0))
];
