import { Stream, List } from "@rimbu/core";

console.clear();

const title = "Welcome to the Rimbu CodeSandbox!";
const line = Stream.of("-")
  .repeat(title.length)
  .join();

const text = Stream.of(
  title,
  line,
  "",
  "Here you find many examples of how to use the library.",
  "It looks as though you are in module mode, which is great.",
  "You can open any file in the `src` folder, and see the results",
  "immediately in this console.",
  "",
  "Have fun!"
);

console.log(text.join({ sep: "\n" }));

const tree = Stream.range(
  { start: 1, end: 15 },
  2
)
  .map((amount) =>
    List.of("o")
      .repeat(amount)
      .padTo(17, ".", 50)
      .stream()
      .join({ sep: " " })
  )
  .join({ sep: "\n" });

console.log(tree);
