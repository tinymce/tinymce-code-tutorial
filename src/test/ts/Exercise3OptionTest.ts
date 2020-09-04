import { Assert, UnitTest } from "@ephox/bedrock-client";
import { Option as Optional, OptionInstances } from '@ephox/katamari';
import * as Ex from '../../main/ts/Part2Ex3Optional';

const tOption = OptionInstances.tOption;

UnitTest.test('getProtocol', () => {
  Assert.eq('simple https', Optional.some('https'), Ex.getProtocol('https://frog.com'), tOption());
  Assert.eq('simple http', Optional.some('https'), Ex.getProtocol('http://frog.com'), tOption());
  Assert.eq('no protocol 1', Optional.none<string>(), Ex.getProtocol('frog.com'), tOption());
  Assert.eq('no protocol 2', Optional.none<string>(), Ex.getProtocol('://frog.com'), tOption());
  Assert.eq('malformed protocol', Optional.none<string>(), Ex.getProtocol('3ttp://frog.com'), tOption());
});

UnitTest.test('toPositiveInteger', () => {
  // TODO: write a few test cases
  // NOTE the examples above - due to how Optional is implemented, we can't compare values as JS objects/arrays/values,
  // and we need to pass in the tOption() equality value

});
