import { EdgeGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log.mjs";

const graphFromValues = EdgeGraphSorted.of(
  [1],
  [2, 3],
  [3, 4]
);
const graphFromIterable = EdgeGraphSorted.of(
  [1, 2],
  [2, 1],
  [1, 3]
);
const emptyGraph = EdgeGraphSorted.empty<
  number
>();

subject("Creating EdgeGraphs");
log({
  graphFromValues,
  graphFromIterable,
  emptyGraph
});
