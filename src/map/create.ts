import { SortedMap } from "@rimbu/core";
import { log, subject } from "../utils/log";

const mapFromValues = SortedMap.of(
  [1, "a"],
  [2, "b"],
  [3, "c"]
);
const mapFromIterable = SortedMap.from([
  [1, "a"],
  [2, "b"],
  [1, "c"]
]);
const emptyMap = SortedMap.empty<
  number,
  string
>();

subject("Create Map");
log({ mapFromValues, mapFromIterable, emptyMap });
