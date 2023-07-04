import { SortedSet } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const builder = SortedSet.builder<number>();

for (let i = 0; i < 10; i++) {
  builder.add(i);
  builder.remove((i * 2) / 3);
}

const set = builder.build();

subject("Build Set");
log({ set });
