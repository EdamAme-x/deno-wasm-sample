import { Buffer } from "node:buffer";

const importObject = {
  imports: { imported_func: (arg) => console.log(arg) }
};

const obj = await WebAssembly.instantiate(
  Buffer.from(await Deno.readFile("./sample.wasm")),
  importObject
);

obj.instance.exports.sample()