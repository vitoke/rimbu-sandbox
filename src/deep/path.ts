import { Path, Patch } from "@rimbu/deep";
import { log, subject } from "../utils/log";

const person = {
  name: "Marc",
  age: 34,
  address: {
    street: "Random street",
    number: 45
  }
};

// if CodeSandbox gives type errors below,
// it does not yet have TypeScript > 4.6 built in

const getAge = Path.get(person, "age");

const getStreet = Path.get(
  person,
  "address.street"
);

const updateAddress1 = Path.update(
  person,
  "address",
  Patch.create({ number: (value) => value + 1 })
);

const updateAddress2 = Path.update(
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
