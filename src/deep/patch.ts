import { patch, patchNested } from "@rimbu/deep";
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

const updatedName = patch(person, {
  name: "James"
});

const updatedStreetNumber = patch(person, {
  address: { number: 47 }
});

const increasedAge = patch(person, {
  age: (value) => value + 1
});

const updatedFriends = patch(person, {
  friends: ["Daisy"]
});

const multiPatch = patch(
  person,
  {
    name: "James"
  },
  {
    address: patchNested({
      street: (v, _, root) =>
        `${v} (${root.name})`
    })
  }
);

subject("patch objects");
log({
  person,
  updatedName,
  updatedStreetNumber,
  increasedAge,
  updatedFriends,
  multiPatch
});
