import {
  Immutable,
  Tuple,
  patch
} from "@rimbu/deep";
import { log, subject } from "../utils/log";

const personAge1 = Immutable(["John", 25]);
// inferred type (too loose):
// readonly (string | number)[]

const personAge2 = Immutable([
  "John",
  25
] as const);
// inferred type (too strict):
// readonly ['John', 25]
// we cannot set other values

const personAge3 = Immutable(
  Tuple.of("John", 25)
);
// inferred type (correct):
// readonly [string, number]

// tuples, like arrays, can be adressed by index:
const personAge4 = patch(personAge3)({ 1: 27 });
// => { values: ["John", 27] }

const personExtended = Tuple.append(
  personAge3,
  true,
  1
);

subject("Tuple");
log({
  personAge1,
  personAge2,
  personAge3,
  personAge4,
  personExtended
});
