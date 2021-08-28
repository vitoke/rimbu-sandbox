import { EdgeValuedGraphSorted } from "@rimbu/core";
import { log, subject } from "../../../utils/log";

const builder = EdgeValuedGraphSorted.builder<
  number,
  number
>();

for (let i = 0; i < 10; i++) {
  builder.connect(i, i + 1, i * 10);
  builder.connect(i, i % 3, i * 100);
}
builder.removeNode(0);

const graph = builder.build();

subject("Building an ArrowValuedGraph");
log({ graph });
