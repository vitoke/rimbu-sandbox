import { BiMap } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

type Cat = "Alice" | "Bob" | "Carol";
type Toy = "Ball" | "Toy Mouse";

const assignments = BiMap.of<Cat, Toy>(
  ["Alice", "Ball"],
  ["Bob", "Toy Mouse"]
);

const carolGetsBall = assignments.set(
  "Carol",
  "Ball"
);

const bobGetsBall = assignments.set(
  "Bob",
  "Ball"
);

subject("BiMap Motivation");
log({
  assignments,
  carolGetsBall,
  bobGetsBall
});
