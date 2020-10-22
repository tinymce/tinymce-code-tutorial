import { Assert, UnitTest } from "@ephox/bedrock-client";
import { Optional, OptionalInstances } from '@ephox/katamari';
import * as Ex from '../../main/ts/Part2Ex3Optional';

const tOptional = OptionalInstances.tOptional;

UnitTest.test('getProtocol', () => {
  Assert.eq('simple https', Optional.some('https'), Ex.getProtocol('https://frog.com'), tOptional());
  Assert.eq('simple http', Optional.some('http'), Ex.getProtocol('http://frog.com'), tOptional());
  Assert.eq('no protocol 1', Optional.none<string>(), Ex.getProtocol('frog.com'), tOptional());
  Assert.eq('no protocol 2', Optional.none<string>(), Ex.getProtocol('://frog.com'), tOptional());
  Assert.eq('malformed protocol', Optional.none<string>(), Ex.getProtocol('3ttp://frog.com'), tOptional());
});

UnitTest.test('toPositiveInteger', () => {
  // TODO: write a few test cases
  // NOTE the examples above - due to how Optional is implemented, we can't compare values as JS objects/arrays/values,
  // and we need to pass in the tOption() equality value

});
