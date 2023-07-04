import { ArrowGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log.mjs";

type Cat = "Alice" | "Bob" | "Carol";

// create a graph where each directional connection indicates that
// the first cat knows the second cat
const knows = ArrowGraphSorted.of<Cat>(
  ["Bob"],
  ["Alice", "Carol"],
  ["Carol", "Bob"],
  ["Carol", "Alice"]
);

const bobKnowsCarol = knows.hasConnection(
  "Bob",
  "Carol"
);

const carolKnowsBob = knows.hasConnection(
  "Carol",
  "Bob"
);

const bobKnowsHimself = knows.hasConnection(
  "Bob",
  "Bob"
);

subject("ArrowGraph Movitavion");
log({
  knows,
  bobKnowsCarol,
  carolKnowsBob,
  bobKnowsHimself
});
