import { Num, U } from "@rimbu/typical";

// @rimbu/typical Num allows type-level calculation for natural numbers

// hover over these types
type N1 = Num.LessThan<5, 10>;
type N2 = Num.Max<123, 234>;
type N3 = Num.Min<123, 234>;
type N4 = Num.Add<123, 234>;
type N5 = Num.Div<234, 13>;
type N6 = Num.Mult<54, 23>;
type N7 = Num.Pow<3, 5>;
type N8 = Num.Subtract<1234, 567>;
type N9 = Num.IsPositive<0>;

// Usage of types in function result
function add<
  N1 extends number,
  N2 extends number
>(n1: N1, n2: N2): Num.Add<N1, N2> {
  return (n1 + n2) as any;
}

// hover over these constants to see their types
const r1 = add(1, 2);
const r2 = add(1234, 4321);
// only natural numbers work
const r3 = add(-1, 5);

// Usage of types in function input
function conditionalNumberAccept<
  N extends number
>(
  value: N &
    U.Check<Num.GreaterThan<N, 5>> &
    U.Check<Num.IsEven<N>>
): void {}

// compiler gives error when input does not match conditions
conditionalNumberAccept(10);
conditionalNumberAccept(4);
conditionalNumberAccept(7);
conditionalNumberAccept(1462);
