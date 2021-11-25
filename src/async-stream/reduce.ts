import {
  AsyncReducer,
  AsyncStream,
  Reducer,
  Stream
} from "@rimbu/core";
import { log, subject } from "../utils/log";

const values = Stream.randomInt(0, 100).take(20);
// prevent every iteration from giving new values
const stream = AsyncStream.from(values.toArray());

async function doAsync() {
  // calculate all in one pass
  const [
    contains5,
    allOver8,
    minValue
  ] = await stream.reduceAll(
    AsyncReducer.from(Reducer.contains(5)),
    AsyncReducer.from(
      Reducer.every((v) => v > 8)
    ),
    AsyncReducer.from(Reducer.min())
  );

  subject("Query Stream");
  log({
    streamToArray: stream.toArray(),
    contains5,
    allOver8,
    minValue
  });
}

doAsync();
