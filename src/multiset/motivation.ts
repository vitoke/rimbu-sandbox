import { SortedMultiSet } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const sentence =
  "sometimes we would like to know the characters and their amounts in a sentence";

const charMultiSet = SortedMultiSet.from(
  sentence
);

const countMap = charMultiSet.countMap;

const amountOfM = charMultiSet.count("m");

const amountOfX = charMultiSet.count("x");

const uniqueChars = charMultiSet
  .streamDistinct()
  .toArray();

subject("MultiSet Motivation");
log({
  sentence,
  charMultiSet,
  countMap,
  amountOfM,
  amountOfX,
  uniqueChars
});
