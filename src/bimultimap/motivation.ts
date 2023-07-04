import { SortedBiMultiMap } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

type Cat = "Alice" | "Bob" | "Carol";
type Badge = "Honor" | "Courage";

const assignments = SortedBiMultiMap.of<
  Cat,
  Badge
>(
  ["Alice", "Honor"],
  ["Alice", "Courage"],
  ["Bob", "Honor"]
);

const alicesBadges = assignments.getValues(
  "Alice"
);

const removeHonorBadge = assignments.removeValue(
  "Honor"
);

subject("BiMultiMap Motivation");
log({
  assignments,
  alicesBadges,
  removeHonorBadge
});
