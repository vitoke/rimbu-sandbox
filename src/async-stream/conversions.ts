import {
  AsyncStream,
  AsyncReducer,
  SortedMap,
  SortedMultiSet,
  List
} from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const stream = AsyncStream.of(1, 2, 3).repeat(3);

async function doAsync() {
  const multiSet = await stream.reduce(
    AsyncReducer.from(SortedMultiSet.reducer())
  );

  const list = await stream
    .concat(stream)
    .reduce(AsyncReducer.from(List.reducer()));

  const map = await stream
    .map((v, i) => [i, v] as const)
    .reduce(
      AsyncReducer.from(SortedMap.reducer())
    );

  subject(
    "Convert an AsyncStream to Collections"
  );
  log({
    multiSet,
    list,
    map
  });
}

doAsync();
