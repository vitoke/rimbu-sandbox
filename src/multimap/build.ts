import { SortedMultiMapSortedValue } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const builder = SortedMultiMapSortedValue.builder<
  number,
  string
>();

for (let i = 0; i < 5; i++) {
  builder.setValues(i, ["a", "b", "c"]);
  builder.add(i, "z");
}

const list = builder.build();

subject("Building a list");
log({ list });
