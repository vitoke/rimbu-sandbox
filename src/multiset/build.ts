import { SortedMultiSet } from "@rimbu/core";
import { log, subject } from "../utils/log";

const builder = SortedMultiSet.builder<number>();

for (let i = 0; i < 6; i++) {
  builder.add(i, i);
  builder.remove(i - 1, i / 2);
}

const multiSet = builder.build();

subject("Build MultiSet");
log({ multiSet });
