import { SortedMultiSet } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const multiSet = SortedMultiSet.of(1, 3, 5, 3);

const amountOf3 = multiSet.count(3);
const amountOf9 = multiSet.count(9);
const has1 = multiSet.has(1);
const uniqueValues = multiSet
  .streamDistinct()
  .toArray();

subject("Query MultiSet");
log({
  multiSet,
  amountOf3,
  amountOf9,
  has1,
  uniqueValues
});
