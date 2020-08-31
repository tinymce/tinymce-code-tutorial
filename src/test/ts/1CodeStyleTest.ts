import { Assert, UnitTest } from '@ephox/bedrock-client';
import * as CodeStyle from '../../main/ts/Exercise1CodeStyle';

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

  const b2: Boundz = ({ x1: 3, y1: 4, x2: 78, y2: 9 });
  Assert.eq('Width', 4, CodeStyle.width(b2));

});

// TODO: write a simple test case for height

