import {
  ArrowValuedGraphSorted,
  Reducer
} from "@rimbu/core";
import { log, subject } from "../../../utils/log.mjs";

type Cat = "Alice" | "Bob" | "Carol";

// create a graph where each directional connection indicates that
// the first cat owes an amount to the second cat
const debts = ArrowValuedGraphSorted.of<
  Cat,
  number
>(
  ["Bob"],
  ["Alice", "Carol", 20],
  ["Carol", "Bob", 40],
  ["Carol", "Alice", 10]
);

const bobOwesCarol = debts.getValue(
  "Bob",
  "Carol",
  0
);

const carolOwesBob = debts.getValue(
  "Carol",
  "Bob",
  0
);

const carolsTotalDebt = debts
  .getConnectionsFrom("Carol")
  .streamValues()
  .reduce(Reducer.sum);

subject("ArrowValuedGraph Movitavion");
log({
  debts,
  bobOwesCarol,
  carolOwesBob,
  carolsTotalDebt
});
