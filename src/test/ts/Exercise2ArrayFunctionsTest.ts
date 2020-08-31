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

UnitTest.test('older frogs', () => {
  Assert.eq('older frogs', [
    { name: 'quietfrog', ribbits: false, age: 10 }
  ], Ex.olderFrogs(Ex.myFrogs))
});

UnitTest.test('csvs', () => {
  Assert.eq('empty array', [], Ex.splitCsvs([]));
  Assert.eq('single string', ['a'], Ex.splitCsvs(['a']));
  Assert.eq('single csv string', ['a', 'b'], Ex.splitCsvs(['a,b']));
  Assert.eq('several strings', ['a', 'b'], Ex.splitCsvs(['a', 'b']));
  Assert.eq('several csv strings', ['a', 'b', 'd', 'a'], Ex.splitCsvs(['a', 'b,d,a']));
});
