import {Assert, UnitTest} from "@ephox/bedrock-client";
import {Optional, OptionalInstances} from "@ephox/katamari";
import {SugarElement, Traverse} from "@ephox/sugar";
import * as Ex from "../../main/ts/Part2Ex5Sugar";

const tOptional = OptionalInstances.tOptional;

UnitTest.test('family', () => {
  Assert.eq('kid 2 from kid 1', Optional.some<SugarElement<ChildNode>>(Ex.kid2), Ex.foundKid2, tOptional());
  Assert.eq('kid 1 from kid 2', Optional.some<SugarElement<ChildNode>>(Ex.kid1), Ex.foundKid1, tOptional());
  Assert.eq('should find kids - kid 1', Ex.kid1, Ex.foundKids[0]);
  Assert.eq('should find kids - kid 2', Ex.kid2, Ex.foundKids[1]);
  Assert.eq('kid 2 should have kid 3', Ex.kid3, Traverse.children(Ex.foundKid2Again.getOrDie())[0]);
});
