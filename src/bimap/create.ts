import { BiMap } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const biMapFromValues = BiMap.of(
  [1, "a"],
  [2, "b"],
  [3, "a"]
);
const biMapFromIterable = BiMap.from([
  [1, "a"],
  [2, "b"]
]);
const emptyBiMap = BiMap.empty<number, string>();

subject("Creating BiMaps");
log({
  biMapFromValues,
  biMapFromIterable,
  emptyBiMap
});
