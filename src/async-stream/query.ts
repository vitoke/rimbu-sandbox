import { AsyncStream, Stream } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

subject("Query AsyncStream");

const values = Stream.randomInt(0, 100).take(20);
// prevent every iteration from giving new values
const stream = AsyncStream.from(values.toArray());

async function doAsync() {
  const contains5 = await stream.contains(5);
  const allOver8 = await stream.every(
    (v) => v > 8
  );
  const minValue = await stream.min();

  log({
    streamToArray: await stream.toArray(),
    contains5,
    allOver8,
    minValue
  });
}

doAsync();
