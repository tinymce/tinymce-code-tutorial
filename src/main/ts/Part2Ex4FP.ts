import { Arr, Fun, Optional } from "@ephox/katamari";

/*
Functional programming is about programming in functions. Functions in the mathematical sense. "Pure" functions.

A pure function is one that has no "side effects".
1. It reads its arguments and returns a value.
2. If you pass it the same input, it always produces the same output.
3. It doesn't print anything to screen, send any network traffic, write to any databases.
4. It doesn't mutate any state.

Anyone seeing this list for the first time will say: well what's the point of FP if I can't do those useful things?

Unfortunately, the answer is not satisfying to beginners: FP does have techniques to manage effects like these and
still use pure functions, but we need to learn a few other things first. Also, these techniques are not well-suited
to TypeScript.

Well, that's a bit of a let-down. But, there's a silver lining... a very, very shiny silver lining, and that's this:

*** You can do functional programming in limited situations and still reap a lot of the benefits. ***

So, we try to write our TypeScript in as functional way as is practical.

What are the benefits we're trying to get?
- If functions only deal with their arguments and only return values, then they're easier to test.
- By separating logic from effect, we structure our programs in a way that's easier to understand.
- Pure functions are easier to refactor, as you don't have to worry about how many times you call them.
- Pure functions in programming are the same as functions in math. When we use pure functions, we can make use of
  the mathematical properties of functions. It turns out that math has ... to put it mildly ... rather a lot to say about functions.

Now, for the sake of time, I'm not going to do any more hard-sell on why it's important - lots has already been written
on this topic and can be found by searching the web. For the rest of this exercise, we're just going to look at some of the
basic techniques and common functions we use.
*/

/*

Extracting side-effects.

In a lot of code, side-effects are mixed up with logic. The more we separate them, the more testable the actual logic is.

In the below (impure) function, we're printing some text for each branch of the optional.
 */
export const printMessage1 = (e: Optional<string>): void =>
  e.fold(
    () => {
      console.log("oop");
    },
    (s) => {
      console.log("The value was " + s);
    }
  );

/*
The only way to test this would be to fake out the console somehow and capture its output, which can get pretty nasty.

Really, this function is doing two things:

1. calculating a string
2. printing it

Calculating the string is a pure function! Let's extract it:
 */

export const getMessage = (e: Optional<string>): string =>
  e.fold(
    () => "oop",
    (s) => "The value was " + s
  );

export const printMessage2 = (e: Optional<string>): void =>
  console.log(getMessage(e));

/*
Now, printMessage2 is still tricky to test, but getMessage is very easy to test. We've improved the testability of our code.

TODO: Extract a pure function for the logic hiding in this (impure) function
*/

type Mode = 'code' | 'design' | 'markdown';

const switchMode = (m: Mode): void => {
  // pretend that something useful happens here that causes a side effect
};

const nextMode = (m: Mode): void => {
  if (m === 'code') {
    switchMode('design');
  } else if (m === 'design') {
    switchMode('markdown');
  } else {
    switchMode('code');
  }
};

export const nextMode1 = (m: Mode): Mode => {
  if (m === 'code') return 'design'
  if (m === 'design') return 'markdown'
  return 'code'
}

/*
The identity function.

This is a very simple function that takes an argument and returns it.
*/

const identity = <A> (a: A): A => a;

/*
 You can find this function in katamari as Fun.identity.

 Now, what use is that? I already had that value!

 Well, let's go back to something we did in Exercise 3 - providing a default value. We used the getOrElse function
 on Optional. You can write a similar function like this:
*/

export const getOrElse1 = <A> (oa: Optional<A>, other: A): A =>
  oa.fold(
    () => other,
    (a) => a
  );

// Hang on - that looks familiar. The function we pass as the "some" case is the identity function.

// TODO: write a version of getOrElse1 using Fun.identity.
export const getOrElse2 = <A> (oa: Optional<A>, other: A): A =>
  oa.fold(
    () => other,
    (a) => Fun.identity(a)
  );

// TODO: What happens if you map the identity function over an Optional?
// Answer: Returns some or none.

// TODO: What happens if you map the identity function over an Array?
// Answer: Returns the array.

/*
In FP, we use a lot of little functions like identity, that seem insignificant on their own, but they come in handy
and form a little toolkit for bashing the data you have into the shape it needs to be in.

Next up is "constant". If you pass a value to this function, it gives you a function that always returns the same thing.

You can find this as Fun.constant in katamari.

One way of writing it is below:
 */

const constant = <A> (a: A) => (...args: unknown[]): A => a;

const always3 = constant(3);

/*
So, constant ignores whatever is passed for input parameters, and just returns the A.

Again, this looks familiar from our getOrElse1 function above.

TODO: rewrite getOrElse1 using both Fun.identity and the "constant" function defined above.
 */
export const getOrElse3 = <A> (oa: Optional<A>, other: A): A =>
  oa.fold(
    Fun.constant(other),
    (a) => Fun.identity(a)
  );

/*
TODO: use katamari's Fun.constant in your getOrElse and see if it compiles.
 */


// TODO: Write a function that takes an array of numbers and replaces each value with 9.
export const replaceWith9 = (numbers: Array<number>): Array<number> => Arr.map(numbers, Fun.constant(9))

// TODO: In the previous question, what's the *same* between the input and output values
// Answer: No matter what number you have in the array it's gonna be replaced by 9.


/*
Function composition

Functions take an input and return an output. Let's think of them as little machines with an input and output slots.
Let's use terrible ASCII art to demonstrate, and generic letters A, B and C to represent their input and output types.

Here's one function:

]===>===[

we stick in an A and it spits out a B:

A ]===>===[ B

Here's another function. This one takes a B and spits out a C.

B }---*>---{ C

So what happens if I plug these two together? Well, I should be able to make a machine that takes an A and spits out a C:

A ]===>===[}---*>---{ C

This is function composition.

In TypeScript, it looks a bit like this:
 */

const compose = <A, B, C> (f: (a: B) => C, g: (a: A) => B) => (a: A): C => f(g(a));

/*
The below function "dblS" doubles a number then converts it to a string.
 */

const dbl = (x: number): number => x * 2;

const dblS: (s: number) => string =
  compose(String, dbl);

/*
It can read a bit funny, since it does the dbl, then the String. But, the order comes from the fact, e.g.

compose(String, dbl) === (a) => String(dbl(x))

Now, katamari has a Fun.compose1, which is like our compose here. It also has a Fun.compose, which has a gnarlier
signature and handling for n-ary functions. Your rule-of-thumb is to use Fun.compose1 unless you really need Fun.compose.
*/

// TODO: use Fun.compose1 to write a function that doubles a number twice
export const doubleTwice = Fun.compose1(dbl, dbl);

// TODO: Rewrite this function to use a single map call and function composition
export const dblOs = (oa: Optional<number>): Optional<string> =>
  oa.map(dbl).map(String);

export const dblOs1 = (oa: Optional<number>): Optional<string> => oa.map(Fun.compose1(String, dbl));
