import { Deep, Tuple } from "@rimbu/core";
import { log, subject } from "../utils/log";

const personAge1 = Deep.protect(["John", 25]);
// inferred type (too loose):
// readonly (string | number)[]

const personAge2 = Deep.protect([
  "John",
  25
] as const);
// inferred type (too strict):
// readonly ['John', 25]
// we cannot set other values

const personAge3 = Tuple.of("John", 25);
// inferred type (correct):
// readonly [string, number]

// tuples, like arrays, can be adressed by index:
const personAge4 = Tuple.updateAt(
  personAge3,
  1,
  27
);
// => { values: ["John", 27] }

const personExtended = Tuple.append(
  personAge3,
  true,
  1
);
// => type is readonly [string, number, boolean, number]

subject("Tuple");
log({
  personAge1,
  personAge2,
  personAge3,
  personAge4,
  personExtended
});
