import { BiMap } from "@rimbu/core";
import { log, subject } from "../utils/log";

const biMap = BiMap.of(
  [1, "a"],
  [2, "b"],
  [3, "a"],
  [4, "c"]
);

const getValueOf2 = biMap.getValue(2);
const getKeyOfB = biMap.getKey("b");
const getNoValue = biMap.getValue(10);
const getNoValueFallback = biMap.getValue(
  10,
  "Q"
);
const getNoValueFallbackLazy = biMap.getValue(
  10,
  () => "Y"
);

subject("Retrieving data from biMaps");
log({
  biMap,
  getValueOf2,
  getKeyOfB,
  getNoValue,
  getNoValueFallback,
  getNoValueFallbackLazy
});
