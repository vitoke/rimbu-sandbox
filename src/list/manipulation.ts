import { List, Stream } from "@rimbu/core";
import { log, subject } from "../utils/log";

const values = Stream.range({ amount: 10 });
const list = List.from(values);

const updateAt = list.updateAt(2, (v) => v + 100);

const rotate = list.rotate(5);

const insert = list.insert(5, [88, 99]);

const reversed = list.reversed();

const slice = list.slice({ start: 3, amount: 4 });

const chained = list
  .filter((v) => v % 2 === 0)
  .insert(5, [100, 101])
  .map((v) => v + 100)
  .reversed()
  .append(500);

subject("Manipulating lists");
log({
  list,
  updateAt,
  rotate,
  insert,
  reversed,
  slice,
  chained
});
