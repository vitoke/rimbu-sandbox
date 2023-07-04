import { AsyncStream, Stream } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const streamFromValues = AsyncStream.of(
  1,
  () => 3,
  Promise.resolve(2),
  async () => 4
);
const streamFromIterable = AsyncStream.from(
  "word"
);
const emptyStream = AsyncStream.empty<number>();
const rangeStream = AsyncStream.from(
  Stream.range({
    start: 3,
    amount: 4
  })
);

async function doAsync() {
  subject("Create AsyncStream");
  log({
    streamFromValues,
    streamFromValuesToArray: await streamFromValues.toArray(),
    streamFromIterable,
    streamFromIterableToArray: await streamFromIterable.toArray(),
    emptyStream,
    emptyStreamToArray: await emptyStream.toArray(),
    rangeStream,
    rangeStreamToArray: await rangeStream.toArray()
  });
}

doAsync();
