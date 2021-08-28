import { SortedSet } from "@rimbu/core";
import { log, subject } from "../utils/log";

const set = SortedSet.of(1, 3, 5, 7, 9);

const setHas3 = set.has(3);
const sethas6 = set.has(6);

subject("Query Set");
log({ set, setHas3, sethas6 });
