import { Stream } from "@rimbu/core";
import { log, subject } from "../utils/log";

subject("Query Stream");

const values = Stream.randomInt(0, 100).take(20);
// prevent every iteration from giving new values
const stream = Stream.from(values.toArray());

const contains5 = stream.contains(5);
const allOver8 = stream.every((v) => v > 8);
const minValue = stream.min();

log({
  streamToArray: stream.toArray(),
  contains5,
  allOver8,
  minValue
});
