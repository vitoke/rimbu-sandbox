import { Stream } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const streamFromValues = Stream.of(1, 3, 2, 4);
const streamFromIterable = Stream.from("word");
const emptyStream = Stream.empty<number>();
const rangeStream = Stream.range({
  start: 3,
  amount: 4
});

subject("Create Stream");
log({
  streamFromValues,
  streamFromValuesToArray: streamFromValues.toArray(),
  streamFromIterable,
  streamFromIterableToArray: streamFromIterable.toArray(),
  emptyStream,
  emptyStreamToArray: emptyStream.toArray(),
  rangeStream,
  rangeStreamToArray: rangeStream.toArray()
});
