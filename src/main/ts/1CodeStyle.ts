import { VisualViewport } from '@ephox/sugar';

/*
Code Style
==========

The first thing people might notice is that we don't use OO - we avoid it entirely.

Concepts like "classes" containing "fields" and "methods" - we avoid those.

Instead, we model data as *interfaces* - ideally with readonly fields -
and we create "static" methods to operate on this data.

1. Let's create a data structure to hold the bounds of an element,
say the top, left, bottom and right as numbers.

*Remember* we like immutable data, so mark the fields readonly.
*/
interface Boundz {
  // TODO: add fields: top, right, bottom, left
}

/*
2. Now let's calculate the width and height of the bounds here.

Notice the use of the arrow function - we like arrow functions because they're concise.
We tell tsc to transpile to ES5, so IE works.

Notice also that we have an explicit return type. This lets the compiler check that our
code matches the type signature.
*/
export const width = (b: Boundz): number =>
  /* TODO */ -1;

// TODO implement height function

/*
At this point, run `yarn tsc` at your shell to make sure everything compiles.

3. This structure is similar to a structure in our Sugar DOM manipulation library,
so let's see if we can convert between the two.
*/

type VVBounds = VisualViewport.Bounds;

// TODO
// export const toSugarBounds = (b: Boundz): VVBounds => ({
//
// });

// TODO: implement fromSugarBounds

/*
Ok, so we started off pretty easy.

Now, code is useless without tests, so let's head over to 1CodeStyleTest.ts
and write some tests.
*/
