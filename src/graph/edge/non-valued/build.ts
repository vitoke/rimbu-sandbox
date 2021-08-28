import { EdgeGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log";

const builder = EdgeGraphSorted.builder<number>();

for (let i = 0; i < 10; i++) {
  builder.connect(i, i + 1);
  builder.connect(i, i % 3);
}
builder.removeNode(0);

const graph = builder.build();

subject("Building an EdgeGraph");
log({ graph });
