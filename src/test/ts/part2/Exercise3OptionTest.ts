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
  });
});

// TODO: Now that you have finished all the test files in this directory,
// try running all tests in the "part2" folder all using the `-d` argument in bedrock and specifying the parent directory.
