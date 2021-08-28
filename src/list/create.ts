import { List } from "@rimbu/core";
import { log, subject } from "../utils/log";

const listFromValues = List.of(1, 2, 3);
const listFromIterable = List.from([1, 2, 4]);
const emptyList = List.empty<string>();

subject("Creating lists");
log({
  listFromValues,
  listFromIterable,
  emptyList
});
