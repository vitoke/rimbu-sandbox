import { Match } from "@rimbu/deep";
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

const isAge34 = Match.any(person)({ age: 34 });

const isAgeOver40 = Match.any(person)({
  age: (v) => v >= 40
});

const isStreetNumberLessThanAge = Match.any(
  person
)({
  address: {
    number: (value, _, root) => value < root.age
  }
});

const ageOver40OrNameAlice = Match.any(person)(
  { age: (v) => v > 40 },
  { name: "Alice" }
);

const ageOver40AndNameAlice = Match.all(person)(
  { age: (v) => v > 40 },
  { name: "Alice" }
);

const secondFriendIsCarol = Match.any(person)({
  friends: { 1: "Carol" }
});

subject("Match object");
log({
  person,
  isAge34,
  isAgeOver40,
  isStreetNumberLessThanAge,
  ageOver40OrNameAlice,
  ageOver40AndNameAlice,
  secondFriendIsCarol
});
