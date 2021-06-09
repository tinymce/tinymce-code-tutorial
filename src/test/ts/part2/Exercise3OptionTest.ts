import { describe, it } from '@ephox/bedrock-client';
import { assert } from 'chai';
import * as Ex from '../../../main/ts/Part2Ex3Optional';


describe('Exercise3OptionTest', () => {
  it('getProtocol', () => {
    assert.equal(Ex.getProtocol('https://frog.com').getOrDie(), 'https');
    assert.equal(Ex.getProtocol('http://frog.com').getOrDie(), 'http');
    assert.isTrue(Ex.getProtocol('frog.com').isNone(), 'no protocol should be found');
    assert.isTrue(Ex.getProtocol('://frog.com').isNone(), 'no protocol should be found');
    assert.isTrue(Ex.getProtocol('3ttp://frog.com').isNone(), 'malformed protocol should not be registered');
  });

  it('toPositiveInteger', () => {
    // TODO: write a few test cases
    // DON'T MERGE THIS IN UNTIL THIS HAS BEEN RESOLVED: HOW DO WE DO THAT vvv WITH CHAI
    // NOTE the examples above - due to how Optional is implemented, we can't compare values as JS objects/arrays/values,
    // and we need to pass in the tOption() equality value
  });
});
