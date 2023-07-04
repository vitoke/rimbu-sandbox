import { SortedBiMultiMap } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const bmmFromValues = SortedBiMultiMap.of(
  [1, "a"],
  [2, "b"],
  [3, "a"],
  [2, "c"]
);
const bmmFromIterable = SortedBiMultiMap.from([
  [1, "a"],
  [1, "b"]
]);
const emptyBiMultiMap = SortedBiMultiMap.empty<
  number,
  string
>();

subject("Creating BiMaps");
log({
  bmmFromValues,
  bmmFromIterable,
  emptyBiMultiMap
});
