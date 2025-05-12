
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

const BinToFloat32 = (str) => {
  var int = parseInt(str, 2);
  if (int > 0 || int < 0) {
      var sign = (int >>> 31) ? -1 : 1;
      var exp = (int >>> 23 & 0xff) - 127;
      var mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
      var float32 = 0
      for (i = 0; i < mantissa.length; i += 1) { float32 += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0; exp-- }
      return float32 * sign;
  } else return 0
}

const enchunk = (data) => [
  ...leb128(data.length),
  ...data
];

const enstr = (str) => [
  ...leb128(str.length),
  ...str.split("").map(s => s.charCodeAt(0))
];
