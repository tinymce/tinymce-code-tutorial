/*
In addition to simple unit tests, we also write "property tests".

Property tests generate a set of random values, and test if a given property holds for the random values.

In this case, we're testing that the width is what we expect.

We start with a random x1 value and the width we want to end up with (along with the two y values).
From this, we then calculate the x2 value.
Now we have the x1,x2,y1,y2 coordinates we need to make a Boundz value.
We can then run CodeStyle.width to get the actual width, and compare to what we expected.

Notice how our test started with a width and used addition to find the x2 value.
In contrast, the implementation starts with an x1 and x2 value and uses subtraction to find the width.

So, we avoid reimplementing the code in the test, by basically doing the *inverse* of what the
actual code does.

This is one type of property we can create, and we'll go into others later.

 */
import { Assert, UnitTest } from '@ephox/bedrock-client';
import fc from 'fast-check';
import * as CodeStyle from '../../main/ts/1CodeStyle';

UnitTest.test('width property', () => {
  // TODO: uncomment
  // fc.assert(
  //   fc.property(fc.integer(0, 100), fc.integer(0, 100), fc.integer(0, 100), fc.integer(0, 100),
  //     (x1, y1, width, y2) => {
  //       const x2 = x1 + width;
  //       Assert.eq('width', width, CodeStyle.width({ x1, x2, y1, y2 }));
  //     })
  // );
});
