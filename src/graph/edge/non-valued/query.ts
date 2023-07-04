import { EdgeGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log.mjs";

const graph = EdgeGraphSorted.of(
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

subject("Retrieval from EdgeGraph");
log({
  graph,
  connectionsFrom3,
  connectionsTo1
});
