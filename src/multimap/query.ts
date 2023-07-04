import { SortedMultiMapSortedValue } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const multiMap = SortedMultiMapSortedValue.of(
  [1, "a"],
  [2, "b"],
  [2, "c"],
  [3, "d"]
);

const valuesOf2 = multiMap.getValues(2);
const has2c = multiMap.hasEntry(2, "c");
const valuesOf9 = multiMap.getValues(9);

subject("Query MultiMap");
log({ multiMap, valuesOf2, has2c, valuesOf9 });
