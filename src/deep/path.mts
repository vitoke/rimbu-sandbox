import { Deep } from "@rimbu/core";
import { log, subject } from "../utils/log.mjs";

const person = {
  name: "Marc",
  age: 34,
  address: {
    street: "Random street",
    number: 45
  }
};

const getAge = Deep.getAt(person, "age");

const getStreet = Deep.getAt(
  person,
  "address.street"
);

const updateAddress1 = Deep.patchAt(
  person,
  "address",
  [{ number: (value) => value + 1 }]
);

const updateAddress2 = Deep.patchAt(
  person,
  "address.number",
  (value) => value + 1
);

subject("Path in object");
log({
  person,
  getAge,
  getStreet,
  updateAddress1,
  updateAddress2
});
