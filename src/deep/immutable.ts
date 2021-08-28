import {
  Immutable,
  patch,
  List
} from "@rimbu/core";
import { log, subject } from "../utils/log";

const obj = Immutable({
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

const obj2 = patch(obj)({
  a: (v) => v + 1,
  b: { c: false },
  d: (vs) => [...vs, 3],
  e: (v) => v.append(3)
});

subject("Immutable");
log({
  obj,
  obj2
});
