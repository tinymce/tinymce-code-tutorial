import { Option as Optional } from "@ephox/katamari";

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
on this topic. For the rest of this exercise, we're just going to look at some of the basic techniques and common
functions we use.
*/

/*
Let's start with the simplest function there is: the identity function.
It takes an argument and returns it.
*/

const identity = <A> (a: A): A => a;

/*
 You can find this function in katamari as Fun.identity.

 Now, what use is that? I already had that value!

 Well, let's go back to something we did in Exercise 3 - providing a default value. We used the getOrElse function
 on Optional. You can write a similar function like this:
*/

const getOrElse1 = <A> (oa: Optional<A>, other: A): A =>
  oa.fold(
    () => other,
    (a) => a
  );

// Hang on - that looks familiar. The function we pass as the "some" case is the identity function.

// TODO: write a version of getOrElse1 using Fun.identity.




// You can also use fold to do some kind of "side-effect" on each branch, as below.


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


