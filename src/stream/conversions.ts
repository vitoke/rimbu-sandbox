import {
  Stream,
  SortedMap,
  SortedMultiSet,
  List
} from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const stream = Stream.of(1, 2, 3).repeat(3);

const multiSet = SortedMultiSet.from(stream);

const list = List.from(stream, stream);

const map = SortedMap.from(
  stream.map((v, i) => [i, v])
);

subject("Convert a Stream to Collections");
log({
  multiSet,
  list,
  map
});
