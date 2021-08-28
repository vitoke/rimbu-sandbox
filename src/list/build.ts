import { List } from "@rimbu/core";
import { log, subject } from "../utils/log";

const builder = List.builder<number>();

for (let i = 0; i < 5; i++) {
  builder.append(i);
  builder.insert(i / 2, i);
  builder.prepend(i);
}

const list = builder.build();

subject("Building a list");
log({ list });
