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

TODO: use Optional.from to implement the following DOM function
 */

export const getNextSibling = (e: Element): Optional<ChildNode> => {
  throw new Error("TODO");
};

// TODO: use Optional.from to implement a similar wrapper for Element.getAttributeNode(string)

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

// TODO: Implement a function using fold, that takes an Optional<number>. If it's some, double it. If it's none, return 0;

// TODO: Implement a function that takes an Optional<T> for any type T. Return true if it's some, and false if it's none.
const trueIfSome = <T> (x: T): Optional<T> => {
  throw new Error("TODO");
}

/*
The last function you implemented is already part of the Optional type, and is called isSome().
There's a corresponding isNone().

In some VERY LIMITED SITUATIONS you can use isSome() and then the UNSAFE getOrDie() function.
It's acceptible to do this in tests, or where nested folding is incredibly cumbersome.
 */

export const unsafeStuff = (e: Optional<string>): void => {
  if (e.isSome()) {
    console.log(e.getOrDie()); // AVOID
  }
}

/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+
+ Aside: But you said we used "static" functions, not methods on objects!
+
+ Yeah, mostly we do. But Optional is from a time before we pushed that concept very hard.
+ At some point, we intend to replace Optional's API with something fully static.
+
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


A common way to handle an Optional value is to provide a default value if in the case of none.

You can do this with fold, but getOrElse is a shortcut.
*/

// TODO: Using getOrElse, take an Optional<{age: string}> and turn it into an {age: string}, using a default value of 0.

// TODO: Write the same function using fold


/*
Another way of thinking about an Optional, is that it's an array that contains either 0 or 1 elements.

Let's explore this by converting Optionals to and from Arrays.
 */

// TODO: Write a function that converts an Optional<A> to an A[] for any type A.

// TODO: Write a function that converts an A[] to an Optional<A>. If the array has more than one element, only consider the first element.


/*
One of the most useful functions on Optional is "map". We say this function "maps a function over the Optional".

If the Optional is some, it runs the function over the some and returns the result as a "some".
If the Optional. is none, it returns none.

Above, we talked about how an Optional is like an array restricted to 0 or 1 elements, so mapping over an Optional
is very similar to mapping over an array (which we did in Exercise 2).

Some examples, then some exercises:
 */

const x: Optional<string> = Optional.some(3).map((x) => String(x)); // returns Optional.some("3")

const y: Optional<string> = Optional.none<number>().map((x) => String(x)); // returns Optional.<string>none()

// TODO: Write a function that takes an Optional<number> and adds 3 to the number

// TODO: Write a function that takes an Optional<string> and prefixes the string with "hello"

/*
TODO: If the below function is called, does it return a value or throw an exception? Why should it behave one way or the other?
Answer: ...
 */
const willItKersplode = (): Optional<string> => {
  const z = Optional.none<string>();
  return z.map<string>((s) => {
    throw new Error("boom");
  });
};

/*
Well done! You've tackled the basis of Optionals. We'll dig into them a bit more in future exercises,
but everything builds on what we've done here.

TODO: head over to Exercise3OptionTest to write some test cases for the above.
*/


/*
Below are some explanatory notes on some more advanced topics. Feel free to skip them if you're still learning.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Aside: mapping
+
+ We've mapped over both Arrays and Optionals. A type that can be mapped over in this way
+ is called a Functor. Arrays and Optionals are Functors. Functors are a very useful abstraction,
+ but outside the scope of this tutorial.
+
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+
+ Aside: TypeScript type refinement
+
+ Why can't we use type refinement to turn an Optional<T> to a Some<T> and make getOrDie() safe?
+ It's to do with how we encode Optional. We use Church Encoding, so Optional is defined like this:
+ interface Optional<A> {
+   fold: <B> (ifNone: () => B, ifSome: (a: A) => B)
+ }
+
+ whereas TypeScript encourages you to encode union types like this:
+
+ type None<A> = { kind: 'none' };
+ type Some<A> = { kind: 'some', value: A };
+ type Optional<A> = Some<A> | None<A>
+
+ Our Optional implementation predates TypeScript, so this wasn't an option at the time.
+ That's not to say Church Encoding is bad. There are pros and cons, but that's a story for another day.
+
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+
+ Aside: Constructing and Destructing
+
+ Many developers are familiar with the idea of a "constructor". You pass values into a constructor
+ to construct an object. While we're not using TypeScript classes here, the functions "some" and
+ "none" are still considered the constructors for the data type.
+
+ What if you want to take an object and get its fields? Well, that's called "destruction". We're
+ taking an object and destructing it into its constituent parts. You'll also find "destructuring assignment"
+ as a feature of many languages, including TypeScript. e.g. const { x } = { x: 3, y: 'foo' };
+
+ Our "fold" function destructures the Option type. In category theory, "fold" is known as a "catamorphism".
+
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 */

