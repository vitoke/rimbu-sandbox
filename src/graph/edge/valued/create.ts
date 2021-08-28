import { EdgeValuedGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log";

const graphFromValues = EdgeValuedGraphSorted.of(
  [1],
  [2, 3, "a"],
  [3, 4, "b"]
);
const graphFromIterable = EdgeValuedGraphSorted.of(
  [1, 2, "a"],
  [2, 1, "b"],
  [1, 3, "a"]
);
const emptyGraph = EdgeValuedGraphSorted.empty<
  number,
  string
>();

subject("Creating EdgeValuedGraphs");
log({
  graphFromValues,
  graphFromIterable,
  emptyGraph
});
