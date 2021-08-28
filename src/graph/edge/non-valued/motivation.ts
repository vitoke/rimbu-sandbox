import { EdgeGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log";
type Cat = "Alice" | "Bob" | "Carol";

// create a graph where each bidirectional edge indicates that
// two cats are friends
const friends = EdgeGraphSorted.of<Cat>(
  ["Bob"],
  ["Alice", "Carol"],
  ["Carol", "Bob"]
);

const areBobAndAliceFriends = friends.hasConnection(
  "Bob",
  "Alice"
);

const areCarolAndAliceFriends = friends.hasConnection(
  "Carol",
  "Alice"
);

const carolsFriends = friends.getConnectionsFrom(
  "Carol"
);

subject("EdgeGraph Movitavion");
log({
  friends,
  areBobAndAliceFriends,
  areCarolAndAliceFriends,
  carolsFriends
});
