import {
  Protected,
  patch,
  List
} from "@rimbu/core";
import { log, subject } from "../utils/log";

const obj = Protected({
  a: 1,
  b: { c: true },
  d: [1, 2],
  e: List.of(1, 2)
});

// these lines give a compiler error
// obj.a = 2;
// obj.b.c = false;
// obj.b.d.push(3);

// this line compiles, but has no effect
obj.e.append(10);

// if CodeSandbox gives an error below,
// it does not yet have TypeScript > 4.6 built in
const obj2 = patch(obj, {
  a: (v) => v + 1,
  b: { c: false },
  d: (vs) => [...vs, 3],
  e: (v) => v.append(3)
});

subject("Protected");
log({
  obj,
  obj2
});
