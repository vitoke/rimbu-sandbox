import { ArrowValuedGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log.mjs";

const graphFromValues = ArrowValuedGraphSorted.of(
  [1],
  [2, 3, "a"],
  [3, 4, "b"]
);
const graphFromIterable = ArrowValuedGraphSorted.of(
  [1, 2, "a"],
  [2, 1, "b"],
  [1, 3, "a"]
);
const emptyGraph = ArrowValuedGraphSorted.empty<
  number,
  string
>();

subject("Creating ArrowValuedGraphs");
log({
  graphFromValues,
  graphFromIterable,
  emptyGraph
});
