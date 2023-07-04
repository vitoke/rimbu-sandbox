import { SortedTableSortedColumn } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const table = SortedTableSortedColumn.of(
  [1, "a", true],
  [1, "b", false],
  [2, "a", false]
);

const rowOf1 = table.getRow(1);
const valueOf2A = table.get(2, "a");
const valueOf2B = table.get(2, "b", "no value");
const rowKeys = table.streamRows().toArray();

subject("Query Table");
log({
  table,
  rowOf1,
  valueOf2A,
  valueOf2B,
  rowKeys
});
