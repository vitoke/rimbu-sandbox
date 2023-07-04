import { SortedSet } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const setFromValues = SortedSet.of(1, 3, 2, 3);
const setFromIterable = SortedSet.from("cdcba");
const emptySet = SortedSet.empty<string>();

subject("Create Set");
log({ setFromValues, setFromIterable, emptySet });
