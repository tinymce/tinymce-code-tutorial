

/*
In functional programming, we aim to program


 */

// You can also use fold to do some kind of "side-effect" on each branch, as below.
import { Option as Optional } from "@ephox/katamari";

export const message2 = (e: Optional<string>): void =>
  e.fold(
    () => {
      console.log("oop");
    },
    (s) => {
      console.log("The value was " + s);
    }
  );

// We normally try to isolate side-effects, though, so we'd normally separate the calculation from the side effect
export const message3 = (e: Optional<string>): void => {
  const m = e.fold(
    () => "no value",
    (s) => "The value was " + s
  );
  console.log(m);
}

