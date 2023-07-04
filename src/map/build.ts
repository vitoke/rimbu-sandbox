import { SortedMap } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const builder = SortedMap.builder<
  number,
  string
>();

for (let i = 0; i < 10; i++) {
  builder.modifyAt(i % 3, {
    ifNew: "A",
    ifExists: (v) => `${v}b`
  });
}

const map = builder.build();

subject("Build Map");
log({ map });
