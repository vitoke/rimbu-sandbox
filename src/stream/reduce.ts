import { Reducer, Stream } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const values = Stream.randomInt(0, 100).take(20);
// prevent every iteration from giving new values
const stream = Stream.from(values.toArray());

// calculate all in one pass
const [
  contains5,
  allOver8,
  minValue
] = stream.reduceAll(
  Reducer.contains(5),
  Reducer.every((v) => v > 8),
  Reducer.min()
);

subject("Query Stream");
log({
  streamToArray: stream.toArray(),
  contains5,
  allOver8,
  minValue
});
