import { List } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const list = List.of(0, 1, 2, 3, 4, 5, 6);

const first = list.first();
const last = list.last();
const get_2 = list.get(2);
const getMinus2 = list.get(-2); // (2nd element from end)
const getOutOfBounds = list.get(10);
const getFallback = list.get(10, 100);
const getFallbackLazy = list.get(10, () => 105);

subject("Retrieving values from a list");
log({
  list,
  first,
  last,
  get_2,
  getMinus2,
  getOutOfBounds,
  getFallback,
  getFallbackLazy
});
