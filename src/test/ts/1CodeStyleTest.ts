import { Assert, UnitTest } from '@ephox/bedrock-client';
import * as CodeStyle from '../../main/ts/1CodeStyle';
import fc from 'fast-check';

type Boundz = CodeStyle.Boundz;

/*
We test using the Bedrock test library.
Bedrock lets us easily run js tests across different browsers.

We start with a definition like this...
 */
UnitTest.test('width', () => {
  // ... and then we write some test cases
  // Format is Assert.eq('comment', expected, actual)

  const b: Boundz = ({ x1: 3, y1: 4, x2: 7, y2: 8 });
  Assert.eq('Width', 4, CodeStyle.width(b));

  // TODO: write another test case for width
});

// TODO: write a simple test case for height

