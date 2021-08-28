import { SortedTableSortedColumn } from "@rimbu/core";
import { log, subject } from "../utils/log";

type Cat = "Alice" | "Bob" | "Carol";
type Class = "Jumping" | "Sneaking" | "Running";

const grades = SortedTableSortedColumn.of<
  Cat,
  Class,
  number
>(
  ["Alice", "Jumping", 8],
  ["Bob", "Running", 4],
  ["Bob", "Jumping", 7],
  ["Carol", "Sneaking", 9]
);

const bobsGrades = grades.getRow("Bob");

const carolSneakingGrade = grades.get(
  "Carol",
  "Sneaking",
  "no grade"
);

const carolJumpingGrade = grades.get(
  "Carol",
  "Jumping",
  "no grade"
);

subject("Table Motivation");
log({
  grades,
  bobsGrades,
  carolSneakingGrade,
  carolJumpingGrade
});
