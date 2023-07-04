import { Deep } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const person = {
  name: "Alice",
  age: 34,
  address: {
    street: "Random street",
    number: 45
  },
  friends: ["Bob", "Carol"]
};

const isAge34 = Deep.match(person, { age: 34 });

const isAgeOver40 = Deep.match(person, {
  age: (v) => v >= 40
});

const isStreetNumberLessThanAge = Deep.match(person, {
  address: {
    number: (value, _, root) => value < root.age
  }
});

const ageOver40OrNameAlice = Deep.match(
  person,
  ['some', { age: (v) => v > 40 }, { name: "Alice" }]
);

const ageOver40AndNameAlice = Deep.match(
  person,
  ['every', { age: (v) => v > 40 }, { name: "Alice" }]
);

const secondFriendIsCarol = Deep.match(person, {
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
