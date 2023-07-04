import {
  SortedMultiMapSortedValue,
  Stream
} from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const words = Stream.of(
  "rimbu",
  "magic",
  "immutable"
);

const charsToWords = SortedMultiMapSortedValue.from(
  words.flatMap((word) =>
    Stream.from(word).map((char) => [char, word])
  )
);

const wordsWithU = charsToWords.getValues("u");

const wordsWithI = charsToWords.getValues("i");

const wordsWithZ = charsToWords.getValues("z");

const uniqueChars = charsToWords
  .streamKeys()
  .toArray();

subject("MultiMap Motivation");
log({
  charsToWords,
  wordsWithU,
  wordsWithI,
  wordsWithZ,
  uniqueChars
});
