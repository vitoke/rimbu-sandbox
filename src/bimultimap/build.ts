import { SortedBiMultiMap } from "@rimbu/core";
import { log, subject } from "../utils/log";

const builder = SortedBiMultiMap.builder<
  number,
  string
>();

builder.setValues(2, ["a", "c"]);
builder.addEntries([
  [1, "a"],
  [3, "a"],
  [4, "d"]
] as const);
builder.removeValue("d");

const biMultiMap = builder.build();

subject("Creating BiMaps");
log({
  biMultiMap
});
