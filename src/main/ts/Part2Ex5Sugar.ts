import { Element as SugarElement, Document as SugarDocument, Traverse, Insert } from '@ephox/sugar';

// TODO: remove when we upgrade this tutorial to TinyMCE 5
import { Element, document, Text } from '@ephox/dom-globals';

/*
Sugar

Sugar is our library for DOM manipulation. It's kinda our version of jquery, but with less $.
Sugar smooths over browser differences and gives us useful functions for manipulating the DOM.

When using Sugar, we don't use native DOM elements, we wrap them in the SugarElement data type.
This encourages us to only use Sugar functions to manipulate these elements, rather than the native DOM directly.

NOTE: Like Option=>Optional, Sugar is in the process of renaming. This tutorial is using the old libraries, but we'll
rename imports to use the new names.

Wrapping

The first thing we need to know is how to wrap and unwrap a sugar element.
 */


const e1: Element = document.createElement('span');

// wrapping
const se1: SugarElement<Element> = SugarElement.fromDom(e1);

// unwrapping
const e2: Element = se1.dom();

/*
Pretty simple so far.

Now, above, we used `document.createElement`. We want to use Sugar functions everywhere, so we should do this instead:
 */

const se2: SugarElement<Element> = SugarElement.fromTag('span');

// or

const se3: SugarElement<Element> = SugarElement.fromTag('span', document);

/*
It's useful to be able to pass in a document parameter to this function, since we're often dealing with iframes as well
as the main document.

TODO: Use SugarElement's fromHtml and fromText functions to create a few elements.
 */

const createSomeElements = (): void => {
  const form: SugarElement<Element> = SugarElement.fromHtml('<form></form>');
  const input: SugarElement<Text> = SugarElement.fromText('Some<>Cool</>HTML=Characters');
};


/*
We often have to traverse from an element to its relatives. The Traverse module has useful functions for this.
 */
() => {
  const parent: SugarElement<Element> = SugarElement.fromTag('div');
  const kid: SugarElement<Element> = SugarElement.fromTag('span');
  Insert.append(parent, kid);

  const parent2 = Traverse.parent(kid);

// TODO: inspect the type of Traverse.parent and explain why that type was used.
// Answer: The parent of a child could be of any Node type
}



() => {
  const parent: SugarElement<Element> = SugarElement.fromTag('div');
  const kid1: SugarElement<Element> = SugarElement.fromTag('span');
  const kid2: SugarElement<Element> = SugarElement.fromTag('div');
  Insert.append(parent, kid1);
  Insert.append(parent, kid2);

  // TODO: starting at kid1, find kid2
  Traverse.nextSibling(kid1);

  // TODO: starting at kid2, find kid1
  Traverse.prevSibling(kid2);

  // TODO: starting at parent, find both kids
  Traverse.children(parent)

  // TODO: kid2 grew up - give it its own child node
  const frogKid: SugarElement<Element> = SugarElement.fromTag('acronym');
  Insert.append(kid2, frogKid);
}

