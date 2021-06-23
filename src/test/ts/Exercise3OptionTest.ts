import { Assert, UnitTest } from "@ephox/bedrock-client";
import { Optional, OptionalInstances } from '@ephox/katamari';
import * as Ex from '../../main/ts/Part2Ex3Optional';

const tOptional = OptionalInstances.tOptional;

UnitTest.test('toPositiveInteger', () => {
  Assert.eq('should return some 1', Optional.some(1), Ex.toPositiveInteger(1), tOptional());
  Assert.eq('should return some 0', Optional.some(0), Ex.toPositiveInteger(0), tOptional());
  Assert.eq('should return none', Optional.none<number>(), Ex.toPositiveInteger(-1), tOptional());
});

UnitTest.test('nonEmpty', () => {
  Assert.eq('should return some foo', Optional.some('foo'), Ex.nonEmpty('foo'), tOptional());
  Assert.eq('should return none', Optional.none<string>(), Ex.nonEmpty(''), tOptional());
});

UnitTest.test('getProtocol', () => {
  Assert.eq('simple https', Optional.some('https'), Ex.getProtocol('https://frog.com'), tOptional());
  Assert.eq('simple http', Optional.some('http'), Ex.getProtocol('http://frog.com'), tOptional());
  Assert.eq('no protocol 1', Optional.none<string>(), Ex.getProtocol('frog.com'), tOptional());
  Assert.eq('no protocol 2', Optional.none<string>(), Ex.getProtocol('://frog.com'), tOptional());
  Assert.eq('malformed protocol', Optional.none<string>(), Ex.getProtocol('3ttp://frog.com'), tOptional());
});

UnitTest.test('getNextSibling', () => {
  const div = document.createElement('div');
  Assert.eq('should return none', Optional.none<ChildNode>(), Ex.getNextSibling(div), tOptional());
  
  const parent = document.createElement('div');
  const child1 = document.createElement('span');
  const child2 = document.createElement('span');
  parent.appendChild(child1);
  parent.appendChild(child2);
  Assert.eq('should return some', Optional.some(parent.childNodes.item(1)), Ex.getNextSibling(child1), tOptional());
});

UnitTest.test('getAttributeNode', () => {
  const div = document.createElement('div');
  Assert.eq('should return none', Optional.none<Attr>(), Ex.getAttributeNode(div, 'id'), tOptional());

  const divWithId = document.createElement('div');
  divWithId.setAttribute('id', 'foo');
  Assert.eq('should return some', Optional.some<any>(divWithId.getAttributeNode('id')), Ex.getAttributeNode(divWithId, 'id'), tOptional());
})

UnitTest.test('double', () => {
  Assert.eq('should double', 4, Ex.double(Optional.some(2)));
  Assert.eq('should return 0', 0, Ex.double(Optional.none()));
});

UnitTest.test('trueIfSome', () => {
  Assert.eq('should return true', true, Ex.trueIfSome(Optional.some(2)));
  Assert.eq('should return false', false, Ex.trueIfSome(Optional.none()));
});

UnitTest.test('getAge', () => {
  Assert.eq('should return age', {age: '11'}, Ex.getAge(Optional.some({age: '11'})));
  Assert.eq('should return age 0', {age: '0'}, Ex.getAge(Optional.none()));
});

UnitTest.test('getAgeFold', () => {
  Assert.eq('should return age', {age: '11'}, Ex.getAgeFold(Optional.some({age: '11'})));
  Assert.eq('should return age 0', {age: '0'}, Ex.getAgeFold(Optional.none()));
});

UnitTest.test('convertToArray', () => {
  Assert.eq('should return empty array', [], Ex.convertToArray(Optional.none()));
  Assert.eq('should return array', ['foo'], Ex.convertToArray(Optional.some('foo')));
});

UnitTest.test('fromArray', () => {
  Assert.eq('should return none', Optional.none<string>(), Ex.fromArray([]), tOptional());
  Assert.eq('should return some', Optional.some('foo'), Ex.fromArray(['foo']), tOptional());
  Assert.eq('should return some', Optional.some('foo'), Ex.fromArray(['foo', 'bar']), tOptional());
});

UnitTest.test('add3', () => {
  Assert.eq('should add 3', Optional.some(4), Ex.add3(Optional.some(1)), tOptional());
  Assert.eq('should return none', Optional.none<number>(), Ex.add3(Optional.none()), tOptional());
});

UnitTest.test('prefixWithHello', () => {
  Assert.eq('should prefix', Optional.some('helloDiogo'), Ex.prefixWithHello(Optional.some('Diogo')), tOptional());
  Assert.eq('should return none', Optional.none<string>(), Ex.prefixWithHello(Optional.none()), tOptional());
});

UnitTest.test('willItKersplode', () => {
  Assert.eq('should prefix', Optional.none<string>(), Ex.willItKersplode(), tOptional());
});

UnitTest.test('kersplodeIfSome', () => {
  Assert.eq('should not explode', Optional.none<string>(), Ex.kersplodeIfSome(Optional.none()), tOptional());
  Assert.throwsError('should explode', () => Ex.kersplodeIfSome(Optional.some('foo')));
});

