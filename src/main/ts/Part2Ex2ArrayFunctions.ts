import { Arr, Optional } from '@ephox/katamari';

/*
Katamari is our library for general-purpose functions and FP basics.
Its array module "Arr" is very handy, so let's explore it.

1. Arr.each

We don't write loops if we can help it. Instead, we go up a level, and call functions that do the looping for us.
The simplest of these is 'each' which just iterates.

TODO: Run the followind code using this command:
yarn bedrock-auto -b chrome-headless -f src/test/ts/Exercise2ArrayFunctionsTest.ts
 */

export const runEach1 = (): void => {
  const xs = [7, 1, 0];
  Arr.each(xs, (x) => {
    console.log(x);
  });
};

/*
2. Let's talk about frogs.

Let's set up some dummy test data to talk about frogs, and write some code about them.
 */

export interface Frog {
  readonly name: string,
  readonly ribbits: boolean,
  readonly age: number
}

export const myFrogs: Frog[] = [
  { name: 'frog1', ribbits: true, age: 3 },
  { name: 'frog2', ribbits: false, age: 4 },
  { name: 'loudfrog', ribbits: true, age: 1 },
  { name: 'quietfrog', ribbits: false, age: 10 },
];

export const runEach2 = (): void => {
  // TODO: Use Arr.each and console.log to print the name of each frog
};

/*
3. Arr.map

The above code is fine if we want to print each frog's name, but what if just want to retrieve each frog's name?

We can use Arr.map for that.

*map runs a function over each element in an array to produce another array*

Let's go through some examples of using Arr.map, then see if you can get the frog's names and ages.
 */

// add 2 to each element
export const runMap1 = (xs: number[]): number[] =>
  Arr.map(xs, (x) => x + 2);

// prepend a string to each element
export const runMap2 = (xs: number[]): string[] =>
  Arr.map(xs, (x) => "the number is " + 1);

// TODO: Return the frog's names and check it by running
// yarn bedrock-auto -b chrome-headless -f src/test/ts/Exercise2ArrayFunctionsTest.ts
export const frogNames = (fs: Frog[]): string[] =>
  [];

// TODO: Return the frog's ages
// TODO: Write a test for this in Exercise2ArrayFunctionsTest

/*
4. Arr.filter

Arr.filter returns the members of an array that match a predicate (function returning boolean).

e.g. to get all the even numbers out of a list:
 */
export const evens = (xs: number[]): number[] =>
  Arr.filter(xs, (x) => x % 2 === 0);

// TODO: Write a function that returns all the frogs that ribbit
// TODO: Run the provided test to check your answer.
export const ribbitting = (frogs: Frog[]): Frog[] =>
  []

// TODO: Write a function that returns all frogs aged 8 or older
export const olderFrogs = (frogs: Frog[]): Frog[] =>
  []

/*
5. Arr.exists

Arr.exists returns true if there is one or more element that matches a predicate.
 */

// TODO: Write a function that returns true if there's one or more ribbiting frogs

// TODO: Write a function that takes an array of numbers, and returns true if there are any negative numbers

/*
6. Arr.bind

Arr.bind is like Arr.map, in that it maps a function over an array. However, the function must return an array.
This results in an array of arrays, which is then flattened.

This behaviour of running map then flatten is why this function is sometimes called "flatmap".

TODO: Write a function that takes a list of strings, each string containing a comma-separated list of values, and returns all of the values as an array.
 */
export const splitCsvs = (csvs: string[]): string[] =>
  []

/*
7. Arr.find

Arr.find returns the first array element that matches a predicate.
 */

const found = Arr.find([1, 2, 3], (x) => x >= 2);

// let's look at the return type...

const f: Optional<number> = found;

/*
You may have encountered Optional in our interview exercises, or in languages like Haskell, Scala or Rust.

Even if you have used them in the past, there's a trick to how we test these.

We'll go into Option in more detail in Exercise 3...

*/