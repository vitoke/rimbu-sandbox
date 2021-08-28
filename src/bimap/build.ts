import { BiMap } from "@rimbu/core";
import { log, subject } from "../utils/log";

const builder = BiMap.builder<number, number>();

for (let i = 0; i < 20; i++) {
  builder.set(i, i % 5);
}
builder.removeValue(0);

const biMap = builder.build();

subject("Building BiMaps");
log({ biMap });
