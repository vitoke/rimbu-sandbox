import { SortedBiMultiMap } from "@rimbu/core";
import { log, subject } from "../utils/log";

const biMultiMap = SortedBiMultiMap.of(
  [1, "a"],
  [2, "b"],
  [3, "a"],
  [2, "c"]
);
const getValuesOf2 = biMultiMap.getValues(2);
const getKeysOfA = biMultiMap.getKeys("a");
const getValuesOf10 = biMultiMap.getValues(10);

subject("Retrieval from BiMultiMaps");
log({
  biMultiMap,
  getValuesOf2,
  getKeysOfA,
  getValuesOf10
});
