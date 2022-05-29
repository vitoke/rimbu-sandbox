import { match } from "@rimbu/deep";
import { log, subject } from "../utils/log";

const person = {
  name: "Alice",
  age: 34,
  address: {
    street: "Random street",
    number: 45
  },
  friends: ["Bob", "Carol"]
};

// if CodeSandbox gives type errors below,
// it does not yet have TypeScript > 4.6 built in

const isAge34 = match(person, { age: 34 });

const isAgeOver40 = match(person, {
  age: (v) => v >= 40
});

const isStreetNumberLessThanAge = match(person, {
  address: {
    number: (value, _, root) => value < root.age
  }
});

const ageOver40OrNameAlice = match(
  person,
  { age: (v) => v > 40 },
  { name: "Alice" }
);

const ageOver40AndNameAlice = match(
  person,
  { age: (v) => v > 40 },
  { name: "Alice" }
);

const secondFriendIsCarol = match(person, {
  friends: { 1: "Carol" }
});

subject("match object");
log({
  person,
  isAge34,
  isAgeOver40,
  isStreetNumberLessThanAge,
  ageOver40OrNameAlice,
  ageOver40AndNameAlice,
  secondFriendIsCarol
});
