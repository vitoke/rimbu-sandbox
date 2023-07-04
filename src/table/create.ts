import { SortedTableSortedColumn } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const tableFromValues = SortedTableSortedColumn.of(
  [1, "a", true],
  [1, "b", false],
  [2, "a", false]
);
const tableFromIterable = SortedTableSortedColumn.from(
  [
    [1, "a", true],
    [1, "b", true],
    [1, "a", false]
  ]
);
const emptyTable = SortedTableSortedColumn.empty<
  number,
  string,
  boolean
>();

subject("Create Table");
log({
  tableFromValues,
  tableFromIterable,
  emptyTable
});
