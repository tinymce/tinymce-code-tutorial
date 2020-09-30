import {Assert, UnitTest} from "@ephox/bedrock-client";
import * as Ex from '../../main/ts/Part2Ex2ArrayFunctions';

UnitTest.test('runEach1', () => {
  Ex.runEach1();
});

UnitTest.test('frog names', () => {
  Assert.eq('frog names', [ 'frog1', 'frog2', 'loudfrog', 'quietfrog' ], Ex.frogNames(Ex.myFrogs));
});

UnitTest.test('frog ages', () => {
  Assert.eq('frog ages', [ 3, 4, 1, 10 ], Ex.frogAges(Ex.myFrogs));
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

UnitTest.test('at least one ribbiting frog', () => {
  Assert.eq(
    'no ribbiters',
    false,
    Ex.atLeastOneRibbiter([
        { name: 'frog1', ribbits: false, age: 3 },
        { name: 'frog2', ribbits: false, age: 4 },
        { name: 'loudfrog', ribbits: false, age: 1 },
        { name: 'quietfrog', ribbits: false, age: 10 },
    ]),
  );

  Assert.eq(
    'one ribbiter',
    true,
    Ex.atLeastOneRibbiter([
        { name: 'frog1', ribbits: false, age: 3 },
        { name: 'frog2', ribbits: false, age: 4 },
        { name: 'loudfrog', ribbits: true, age: 1 },
        { name: 'quietfrog', ribbits: false, age: 10 },
    ]),
  );
});

UnitTest.test('at least one negative number', () => {
  Assert.eq(
    'no negatives',
    false,
    Ex.atLeastOneNegative([0, 5, 10, 100]),
  );

  Assert.eq(
    'one negative',
    true,
    Ex.atLeastOneNegative([0, 5, -10, 100]),
  );
});

UnitTest.test('csvs', () => {
  Assert.eq('empty array', [], Ex.splitCsvs([]));
  Assert.eq('single string', ['a'], Ex.splitCsvs(['a']));
  Assert.eq('single csv string', ['a', 'b'], Ex.splitCsvs(['a,b']));
  Assert.eq('several strings', ['a', 'b'], Ex.splitCsvs(['a', 'b']));
  Assert.eq('several csv strings', ['a', 'b', 'd', 'a'], Ex.splitCsvs(['a', 'b,d,a']));
});
