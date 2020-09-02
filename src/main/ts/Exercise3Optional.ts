import { Option as Optional } from '@ephox/katamari';
/*
Optional

NOTE: In TinyMCE 5.4 and earlier, this type is known as Option.
This codebase currently uses an old version, but we're renaming the import to match the new name.

Programming is all about writing functions to compute values. But quite often we have functions that can't return a
value in all cases. Some examples:

- an array may not have a first element
- an operation may fail
- a DOM element may not have an "id" attribute
- a given config setting may not be set

There are many ways of representing these "empty" cases, including:
- returning a special value, e.g. empty string, empty array, NaN
- returining null or undefined
- throwing an exception

In TinyMCE, we use a different approach. We represent these scenarios with a data type called "Optional".

An "Optional" may contain a value, or it may not.
- If it contains a value, use Optional.some(x).
- If it doesn't contain a value, use Optional.none()

e.g.
 */
const parseIntOpt = (s: string): Optional<number> => {
  const n = parseInt(s);
  return Number.isNaN(n) ? Optional.some(n) : Optional.none();
};

const toPositiveInteger = (n: number): Optional<number> =>
  n > 0 ? Optional.some(n) : Optional.none();

// TODO: create a function which takes a string and returns some if the string is non-empty

// TODO: create a function which takes a url as a string and returns the protocol part as an Optional.
// The string may or may not actually have a protocol. For the protocol to be valid, it needs to be all alpha characters.
// You can use a regex.
// Have a look at Exercise3OptionTest.ts for example input. Make sure the tests pass.
export const getProtocol = (url: string): Optional<string> => {
  throw new Error("TODO");
};

/*
The other way we construct Optionals, is using Optional.from.

Optional.from take a value which may be null, undefined or an actual value.
- if it's null/undefined, it returns none
- otherwise, it returns some() of the value

Optional.from is useful for taking values from the "nullable" world to the Optional world.
 */

// TODO: use Optional.from to implement the following DOM function
export const getNextSibling = (e: Element): Optional<ChildNode> => {
  throw new Error("TODO");
};

/*
How do we get data out of an Optional? Well, that's a bit tricky since there isn't always
data in there! But, there's a way to do it and we call that function "fold".

Since an Optional can be a "some" or a "none", we tell fold:
- what to do if it's some
- what to do if it's none

We pass 2 functions to fold in order to do this.
 */

export const message = (e: Optional<string>): string =>
  e.fold(
    () => "no value",
    (s) => "The value was " + s
  );

// TODO:




/*
Aside: Constructing and Destructing

Many developers are familiar with the idea of a "constructor". You pass values into a constructor
to construct an object. While we're not using TypeScript classes here, the functions "some" and
"none" are still considered the constructors for the data type.

What if you want to take an object and get its fields? Well, that's called "destruction". We're
taking an object and destructing it into its constituent parts. You'll also find "destructuring assignment"
as a feature of many languages, including TypeScript.

Our "fold" function destructures the Option type. In category theory, "fold" is known as a "catamorphism".

 */

// TODO: head over to Exercise3OptionTest to write some test cases for the above.
