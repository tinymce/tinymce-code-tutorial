import { Arr } from '@ephox/katamari';

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
