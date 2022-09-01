import { describe, it } from "@ephox/bedrock-client";
import { assert } from "chai";
import * as Ex from "../../../main/ts/Part2Ex3Optional";
import { Optional } from "@ephox/katamari";

describe("Exercise3OptionTest", () => {
  it("nonEmptyString", () => {
    assert.isTrue(Ex.nonEmptyString("").isNone(), "emptystring");
    assert.equal(
      Ex.nonEmptyString("hello").getOrDie(),
      "hello",
      "nonempty string"
    );
  });

  it("getProtocol", () => {
    assert.equal(Ex.getProtocol("https://frog.com").getOrDie(), "https");
    assert.equal(Ex.getProtocol("http://frog.com").getOrDie(), "http");
    assert.isTrue(
      Ex.getProtocol("frog.com").isNone(),
      "no protocol should be found"
    );
    assert.isTrue(
      Ex.getProtocol("://frog.com").isNone(),
      "no protocol should be found"
    );
    assert.isTrue(
      Ex.getProtocol("3ttp://frog.com").isNone(),
      "malformed protocol should not be registered"
    );
  });

  it("getNextSibling", () => {
    const child1 = document.createElement("div");
    child1.setAttribute("id", "child1");
    const child2 = document.createElement("div");
    child2.setAttribute("id", "child2");
    const nestedChild = document.createElement("div");
    nestedChild.setAttribute("id", "nestedChild");
    child1.appendChild(nestedChild);

    document.body.append(child1);
    document.body.append(child2);

    /*
    <div id="child1">
      <div id="nestedChild">
    </div>

    <div id="child2"></div>
    */

    assert.equal(
      Ex.getNextSibling(child1).getOrDie(),
      document.getElementById("child2")! as ChildNode
    );

    assert.isTrue(Ex.getNextSibling(nestedChild).isNone());
  });

  it("getAttribute", () => {
    const el = document.createElement("div");
    el.setAttribute("id", "element");

    assert.equal(
      Ex.getAttribute(el, "id").getOrDie(),
      el.getAttributeNode("id")
    );
    assert.isTrue(Ex.getAttribute(el, "di").isNone());
  });

  it("optionalDouble", () => {
    assert.equal(Ex.optionalDouble(Optional.some(5)), 10);
    assert.equal(Ex.optionalDouble(Optional.none()), 0);
  });

  it("trueIfSome", () => {
    assert.isTrue(Ex.trueIfSome(Optional.some("hello")));
    assert.isFalse(Ex.trueIfSome(Optional.none()));
  });

  it("getAgeOrDefault", () => {
    assert.deepEqual(Ex.getAgeOrDefault(Optional.some({ age: 5 })), { age: 5 });
    assert.deepEqual(Ex.getAgeOrDefault(Optional.none()), { age: 0 });
  });

  it("toPositiveInteger", () => {
    // DONE: write a few test cases
    assert.isTrue(Ex.toPositiveInteger(5).equals(Optional.some(5)));
    assert.isTrue(Ex.toPositiveInteger(0).isNone());
    assert.isTrue(Ex.toPositiveInteger(-1).isNone());
  });

  it("optionalToArray", () => {
    assert.deepEqual(Ex.optionalToArray(Optional.some(10)), [10]);
    assert.deepEqual(Ex.optionalToArray(Optional.some("hello")), ["hello"]);
    assert.deepEqual(Ex.optionalToArray(Optional.none()), []);
  });

  it("arrayToOptional", () => {
    assert.isTrue(Ex.arrayToOptional([10]).equals(Optional.some(10)));
    assert.isTrue(Ex.arrayToOptional(["hello"]).equals(Optional.some("hello")));
    assert.isTrue(Ex.arrayToOptional([]).isNone());
  });

  it("addThreeToOptional", () => {
    assert.isTrue(
      Ex.addThreeToOptional(Optional.some(10)).equals(Optional.some(13))
    );
    assert.isTrue(Ex.addThreeToOptional(Optional.none()).isNone());
  });

  it("prefixStrinigOptional", () => {
    assert.isTrue(
      Ex.prefixStringOptional(Optional.some(" world")).equals(
        Optional.some("hello world")
      )
    );
    assert.isTrue(Ex.prefixStringOptional(Optional.none()).isNone());
  });
});

// DONE: Now that you have finished all the test files in this directory,
// try running all tests in the "part2" folder all using the `-d` argument in bedrock and specifying the parent directory.
