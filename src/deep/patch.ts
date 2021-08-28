import { patch } from "@rimbu/deep";
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

const updatedName = patch(person)({
  name: "James"
});

const updatedStreetNumber = patch(person)({
  address: { number: 47 }
});

const increasedAge = patch(person)({
  age: (value) => value + 1
});

const updatedFriends = patch(person)({
  friends: { 1: "Daisy", 9: "NotExists" }
});

const multiPatch = patch(person)(
  {
    name: "James"
  },
  {
    address: {
      street: (v, _, root) =>
        `${v} (${root.name})`
    }
  }
);

subject("Patch objects");
log({
  person,
  updatedName,
  updatedStreetNumber,
  increasedAge,
  updatedFriends,
  multiPatch
});
