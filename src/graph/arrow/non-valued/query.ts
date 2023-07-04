import { ArrowGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log.mjs";

const graph = ArrowGraphSorted.of(
  [1, 1],
  [2, 3],
  [3, 4],
  [3, 1]
);

const connectionsFrom3 = graph.getConnectionsFrom(
  3
);
const connectionsTo1 = graph
  .getConnectionStreamTo(1)
  .toArray();
const isSink4 = graph.isSink(4);
const isSink3 = graph.isSink(3);
const isSource2 = graph.isSource(2);
const isSource3 = graph.isSource(3);

subject("Retrieval from ArrowGraph");
log({
  graph,
  connectionsFrom3,
  connectionsTo1,
  isSink4,
  isSink3,
  isSource2,
  isSource3
});
