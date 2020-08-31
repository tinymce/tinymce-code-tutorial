import {Assert, UnitTest} from "@ephox/bedrock-client";
import * as Ex from '../../main/ts/Exercise2ArrayFunctions';

UnitTest.test('runEach1', () => {
  Ex.runEach1();
});

UnitTest.test('frog names', () => {
  Assert.eq('frog names', [ 'frog1', 'frog2', 'loudfrog', 'quietfrog' ], Ex.frogNames(Ex.myFrogs));
});

UnitTest.test('frog ages', () => {
  // TODO: write a test for your frog ages function
});

UnitTest.test('ribbitting frogs', () => {
  Assert.eq('ribbitting', [
    { name: 'frog1', ribbits: true, age: 3 },
    { name: 'loudfrog', ribbits: true, age: 1 }
  ], Ex.ribbitting(Ex.myFrogs));
});
