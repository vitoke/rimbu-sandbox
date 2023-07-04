import { ArrowGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log.mjs";

const graphFromValues = ArrowGraphSorted.of(
  [1],
  [2, 3],
  [3, 4]
);
const graphFromIterable = ArrowGraphSorted.of(
  [1, 2],
  [2, 1],
  [1, 3]
);
const emptyGraph = ArrowGraphSorted.empty<
  number
>();

subject("Creating ArrowGraphs");
log({
  graphFromValues,
  graphFromIterable,
  emptyGraph
});
