import {Assert, UnitTest} from "@ephox/bedrock-client";
import {Fun, Optional, OptionalInstances} from "@ephox/katamari";
import * as Ex from '../../main/ts/Part2Ex5Sugar';

const tOptional = OptionalInstances.tOptional;

UnitTest.test('family', () => {
  Assert.eq('kid 2 from kid 1', Ex.parent.dom.childNodes.item(1), Ex.foundKid2);
  Assert.eq('kid 1 from kid 2', Ex.parent.dom.childNodes.item(0), Ex.foundKid1);
  Assert.eq('should find kids', Ex.parent.dom.childNodes, Ex.foundKids);
  Assert.eq('kid 2 should have kid 3', Ex.kid2, Ex.foundKid2Again);
});
