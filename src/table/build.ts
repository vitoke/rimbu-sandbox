import { SortedTableSortedColumn } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const builder = SortedTableSortedColumn.builder<
  number,
  string,
  boolean
>();

for (let i = 0; i < 10; i++) {
  builder.set(i % 3, String(i % 4), i % 2 === 0);
}

const table = builder.build();

subject("Build Table");
log({ table });
