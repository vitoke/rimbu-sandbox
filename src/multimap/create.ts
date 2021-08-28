import { SortedMultiMapSortedValue } from "@rimbu/core";
import { log, subject } from "../utils/log";

const mmFromValues = SortedMultiMapSortedValue.of(
  [1, "a"],
  [2, "b"],
  [1, "c"]
);
const mmFromIterable = SortedMultiMapSortedValue.from(
  [
    [1, "a"],
    [1, "c"],
    [2, "a"]
  ]
);
const emptyMM = SortedMultiMapSortedValue.empty<
  number,
  string
>();

subject("Creating MultiMaps");
log({ mmFromValues, mmFromIterable, emptyMM });
