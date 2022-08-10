const hardcode = [
  // magic module 0ASM
  0x00, 0x61, 0x73, 0x6d,
  // wasm version 0001
  0x01, 0x00, 0x00, 0x00,
  ...emittypes(),
  ...emitfuncs(),
  ...emitmem(),
  ...emitexps(),

  ...emitcode()

]

const boilerplate = [

    // magic module 0ASM
    0x00, 0x61, 0x73, 0x6d,
    // wasm version 0001
    0x01, 0x00, 0x00, 0x00,
    ...emittypes(),
    ...emitfuncs(),
    ...emitmem(),
    ...emitexps()

]
