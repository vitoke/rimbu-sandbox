import { ArrowValuedGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log";

const graph = ArrowValuedGraphSorted.of(
  [1, 1, "a"],
  [2, 3, "b"],
  [3, 4, "c"],
  [3, 1, "a"]
);

const connectionsFrom3 = graph.getConnectionsFrom(
  3
);
const connectionsTo1 = graph
  .getConnectionStreamTo(1)
  .toArray();
const valueOf2To3 = graph.getValue(2, 3);
const valueOf3To2 = graph.getValue(
  3,
  2,
  "not connected"
);

subject("Retrieval from ArrowValuedGraph");
log({
  graph,
  connectionsFrom3,
  connectionsTo1,
  valueOf2To3,
  valueOf3To2
});
