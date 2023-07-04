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

const updatedName = Deep.patch(person, [
  {
    name: "James"
  }
]);

const updatedStreetNumber = Deep.patch(person, [
  {
    address: [{ number: 47 }]
  }
]);

const increasedAge = Deep.patch(person, [
  {
    age: (value) => value + 1
  }
]);

const updatedFriends = Deep.patch(person, [
  {
    friends: ["Daisy"]
  }
]);

const multiPatch = Deep.patch(person, [
  {
    name: "James"
  },
  {
    address: [
      {
        street: (v, _, root) =>
          `${v} (${root.name})` // root.name is "James" here, not "Alice"
      }
    ]
  }
]);

subject("patch objects");
log({
  person,
  updatedName,
  updatedStreetNumber,
  increasedAge,
  updatedFriends,
  multiPatch
});
