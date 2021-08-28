import { SortedMultiSet } from "@rimbu/core";
import { log, subject } from "../utils/log";

const msFromValues = SortedMultiSet.of(
  1,
  3,
  5,
  3
);
const msFromIterable = SortedMultiSet.from([
  1,
  3,
  2,
  3
]);
const emptyMS = SortedMultiSet.empty<number>();

subject("Create MultiSet");
log({ msFromValues, msFromIterable, emptyMS });
