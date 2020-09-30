import { Assert, UnitTest } from "@ephox/bedrock-client";
import { Option as Optional, OptionInstances } from '@ephox/katamari';
import * as Ex from '../../main/ts/Part2Ex3Optional';

const tOption = OptionInstances.tOption;

UnitTest.test('getProtocol', () => {
  Assert.eq('simple https', Optional.some('https'), Ex.getProtocol('https://frog.com'), tOption());
  Assert.eq('simple http', Optional.some('http'), Ex.getProtocol('http://frog.com'), tOption());
  Assert.eq('no protocol 1', Optional.none<string>(), Ex.getProtocol('frog.com'), tOption());
  Assert.eq('no protocol 2', Optional.none<string>(), Ex.getProtocol('://frog.com'), tOption());
  Assert.eq('malformed protocol', Optional.none<string>(), Ex.getProtocol('3ttp://frog.com'), tOption());
  Assert.eq('simple ftp', Optional.some('ftp'), Ex.getProtocol('ftp://frog.com'), tOption());
});

UnitTest.test('toPositiveInteger', () => {
  Assert.eq('negative to none', Optional.none<number>(), Ex.toPositiveInteger(-5), tOption());
  Assert.eq('positive to some of positive', Optional.some<number>(5), Ex.toPositiveInteger(5), tOption());
  Assert.eq('zero non-positive', Optional.none<number>(), Ex.toPositiveInteger(0), tOption());
});

UnitTest.test('parseStrOpt', () => {
  Assert.eq('empty string', Optional.none<string>(), Ex.parseStrOpt(''), tOption());
  Assert.eq('non-empty string', Optional.some('cute frog'), Ex.parseStrOpt('cute frog'), tOption());
});
