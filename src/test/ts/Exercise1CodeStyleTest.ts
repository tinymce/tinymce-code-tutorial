import { Assert, UnitTest } from '@ephox/bedrock-client';
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
UnitTest.test('width', () => {
  // ... and then we write some test cases
  // Format is Assert.eq('comment', expected, actual)
  
  const b1: Boundz = ({ x1: 3, y1: 4, x2: 7, y2: 8 });
  const b2: Boundz = ({ x1: 1, y1: 4, x2: 2, y2: 8 });
  Assert.eq('Width', 4, CodeStyle.width(b1));
  Assert.eq('Width', 1, CodeStyle.width(b2));
});

/*
3. Testing 'height' function

We can have multiple UnitTest.test calls in one file. This can be useful to separate tests.
In this case, we'll call UnitTest.test again, to write a test for 'height'

*/

UnitTest.test('height', () => {
  const b1: Boundz = ({ x1: 3, y1: 1, x2: 7, y2: 10 });
  const expected = 9;
  Assert.eq(`Height should be ${expected}`, expected, CodeStyle.height(b1));
});

/*
4. Test output

The below test should fail.

TODO Run it using the commands above. Notice that the output shows a diff.
TODO Correct the test and run it again.

 */

UnitTest.test('failing test', () => {
  Assert.eq('!oops', { a: 1, b: 7, c: 8 }, { a: 1, b: 7, c: 8 });
});
