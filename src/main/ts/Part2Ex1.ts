/*
Code Style
==========

The first thing people might notice is that we don't use OO - we avoid it entirely.

Concepts like "classes" containing "fields" and "methods" - we avoid those.

Instead, we model data as *interfaces* - ideally with readonly fields -
and we create "static" methods to operate on this data.

1. Let's create a data structure to hold the bounds of an element.
Let's model the x,y of the top-left and bottom-right corners.

*Remember* we like immutable data, so mark the fields readonly.
*/
export interface Boundz {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
}

/*
2. Now let's calculate the width and height of the bounds here.

Notice the use of the arrow function - we like arrow functions because they're concise.
We tell tsc to transpile to ES5, so IE works.

Notice also that we have an explicit return type. This lets the compiler check that our
code matches the type signature.
*/

/* DONE */
export const width = (b: Boundz): number => b.x2 - b.x1;

// DONE implement height function
export const height = (b: Boundz): number => b.y2 - b.y1;

/*
3. Compiling.

DONE Run `yarn build` at your shell to make sure everything compiles.

`build` is a script defined in the package.json. Have a look at package.json to see what it does.

*/

/*
Ok, so we started off pretty easy.

Now, code is useless without tests, so let's head over to Exercise1CodeStyleTest.ts
and write some tests.
*/
