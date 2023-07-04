import { EdgeValuedGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log.mjs";

type Cat = "Alice" | "Bob" | "Carol";

const distances = EdgeValuedGraphSorted.of<
  Cat,
  number
>(
  ["Alice", "Carol", 20],
  ["Carol", "Bob", 40],
  ["Carol", "Alice", 10]
);

const distanceBetweenAliceAndCarol = distances.getValue(
  "Alice",
  "Carol",
  "unknown"
);

const distanceBetweenBobAndAlice = distances.getValue(
  "Bob",
  "Alice",
  "unknown"
);

subject("EdgeValuedGraph Motivation");
log({
  distances,
  distanceBetweenAliceAndCarol,
  distanceBetweenBobAndAlice
});
