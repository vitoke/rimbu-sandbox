import { Str, U } from "@rimbu/typical";

// @rimbu/typical Str allows type-level string manipulation

// hover over these types
type R1 = Str.TakeWhile<"abacd", "a" | "b">;
type R2 = Str.DropWhile<"abacd", "a" | "b">;
type R3 = Str.CharAt<"abacd", 3>;
type R4 = Str.ReplaceAll<"abacd", "b" | "c", "-">;
type R5 = Str.Reverse<"abacd">;
type R6 = Str.RepeatAtLeastTimes<
  "abababcd",
  "ab",
  2
>;
type R7 = Str.RepeatAtLeastTimes<
  "abababcd",
  "ab",
  4
>;
type R8 = Str.Contains<"abacadef", "ad">;
type R9 = Str.FilterNot<"abadefasd", "d" | "f">;

// Use in function results
function replace<
  S extends string,
  Sub extends string & Str.NonEmptyString<Sub>,
  Repl extends string
>(
  s: S,
  sub: Sub,
  repl: Repl
): Str.ReplaceAll<S, Sub, Repl> {
  return null as any;
}

// hover over the consts to see their types
replace("abc", "", "a");
const r1 = replace("abc", "a", "q");
const r2 = replace("abc", "ab", "q");

// Use in function arguments
function conditionalString<S extends string>(
  value: S & U.Check<Str.Contains<S, "_", 2>>
) {}

conditionalString("");
conditionalString("abc");
conditionalString("a_bc");
conditionalString("a_b_c");
conditionalString("a__c");
conditionalString("____");
