import { Path } from "@rimbu/deep";
import { log, subject } from "../utils/log";

const person = {
  name: "Marc",
  age: 34,
  address: {
    street: "Random street",
    number: 45
  }
};

const getAge = Path.getValue(person, "age");

const getStreet = Path.getValue(
  person,
  "address.street"
);

const updateAddress1 = Path.patchValue(
  person,
  "address",
  { number: (value) => value + 1 }
);

const updateAddress2 = Path.patchValue(
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
