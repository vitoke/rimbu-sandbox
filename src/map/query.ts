import { SortedMap } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const map = SortedMap.of(
  [1, "a"],
  [2, "b"],
  [3, "c"]
);

const valueOf2 = map.get(2);
const valueOf9 = map.get(9, "no value");
const allKeys = map.streamKeys().toArray();

subject("Query Map");
log({ map, valueOf2, valueOf9, allKeys });
