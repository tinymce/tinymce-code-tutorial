import { Assert, describe, it, UnitTest } from '@ephox/bedrock-client';
import { assert } from 'chai';
import * as CodeStyle from '../../main/ts/Part2Ex1';

type Boundz = CodeStyle.Boundz;

/*
We test using the Bedrock test library.
Bedrock lets us easily run js tests across different browsers.

1. Running tests with bedrock

To test this file with bedrock, run:
yarn bedrock-auto -b chrome-headless -f src/test/ts/Exercise1CodeStyleTest.ts

If you want to run this in a full browser, try:
yarn bedrock-auto -b chrome -f src/test/ts/Exercise1CodeStyleTest.ts

TODO: Run bedrock in both modes shown above.

Note: if you have changed the code, you will want to run `yarn build` beforehand.

2. Defining tests

We start with a definition like this...
 */
describe('Exercise1CodeStyleTests', () => {
  it('width', () => {
    // ... and then we write some test cases
    // Format is Assert.eq('comment', expected, actual)

    const b: Boundz = ({ x1: 3, y1: 4, x2: 7, y2: 8 });
    assert.deepEqual(CodeStyle.width(b), 4, 'Width');

    // TODO: write another test case for width
  });

  /*
  3. Testing 'height' function

  We can have multiple UnitTest.test calls in one file. This can be useful to separate tests.
  In this case, we'll call UnitTest.test again, to write a test for 'height'

   */
  // TODO: write a simple test case for height

  /*
  4. Test output

  The below test should fail.

  TODO remove the ".skip" to enable this test. Run it using the commands above.
  Notice that the output shows a diff.
  TODO Correct the test and run it again.

   */

  it.skip('failing test', () => {
    assert.deepEqual({ a: 1, b: 2 }, { a: 1, b: 7, c: 8 });
  });
});
