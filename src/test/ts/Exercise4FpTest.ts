import {Assert, UnitTest} from "@ephox/bedrock-client";
import {Fun, Optional, OptionalInstances} from "@ephox/katamari";
import * as Ex from '../../main/ts/Part2Ex4FP';

const tOptional = OptionalInstances.tOptional;

UnitTest.test('nextMode1', () => {
  Assert.eq('should return design', 'design', Ex.nextMode1('code'));
  Assert.eq('should return markdown', 'markdown', Ex.nextMode1('design'));
  Assert.eq('should return code', 'code', Ex.nextMode1('markdown'));
});

UnitTest.test('identity', () => {
  Assert.eq('should return some', Optional.some('foo'), Fun.identity(Optional.some('foo')), tOptional());
  Assert.eq('should return none', Optional.none(), Fun.identity(Optional.none()), tOptional());
  Assert.eq('should return arr', [1, 2, 3, 4], Fun.identity([1, 2, 3, 4]));
  Assert.eq('should return empty arr', [], Fun.identity([]));
});

UnitTest.test('getOrElse', () => {
  Assert.eq('should return bar', 'bar', Ex.getOrElse1(Optional.some('bar'), 'else'));
  Assert.eq('should return else', 'else', Ex.getOrElse1(Optional.none(), 'else'));
  Assert.eq('should return bar - 2', 'bar', Ex.getOrElse2(Optional.some('bar'), 'else'));
  Assert.eq('should return else - 2', 'else', Ex.getOrElse2(Optional.none(), 'else'));
  Assert.eq('should return bar - 3', 'bar', Ex.getOrElse3(Optional.some('bar'), 'else'));
  Assert.eq('should return else - 3', 'else', Ex.getOrElse3(Optional.none(), 'else'));
});

UnitTest.test('replaceWith9', () => {
  Assert.eq('should replace with 9', [9, 9, 9], Ex.replaceWith9([1, 1, 1]));
});

UnitTest.test('doubleTwice', () => {
  Assert.eq('should replace with 9', 8, Ex.doubleTwice(2));
});

UnitTest.test('dblOs', () => {
  Assert.eq('should return some 2 string', Optional.some('4'), Ex.dblOs(Optional.some(2)), tOptional());
  Assert.eq('should return none string', Optional.none<string>(), Ex.dblOs(Optional.none()), tOptional());
  Assert.eq('should return some 2 string - dblos1', Optional.some('4'), Ex.dblOs1(Optional.some(2)), tOptional());
  Assert.eq('should return none string - dblos1', Optional.none<string>(), Ex.dblOs1(Optional.none()), tOptional());
});
