import { SugarElement, SugarDocument, Traverse, Insert } from '@ephox/sugar';

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
const e2: Element = se1.dom;

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
SugarElement.fromHtml('<div>foo</div>');
SugarElement.fromText('Lorem ipsum');

/*
We often have to traverse from an element to its relatives. The Traverse module has useful functions for this.
 */
() => {
  const parent: SugarElement<Element> = SugarElement.fromTag('div');
  const kid: SugarElement<Element> = SugarElement.fromTag('span');
  Insert.append(parent, kid);

  const parent2 = Traverse.parent(kid);

// TODO: inspect the type of Traverse.parent and explain why that type was used.
// Answer: `Optional` cause an element cannot have a parent. `Node & ParentNode` cause it's a node and it's a parent.
};



//() => { /* so I can test */
  export const parent: SugarElement<Element> = SugarElement.fromTag('div');
  export const kid1: SugarElement<Element> = SugarElement.fromTag('span');
  export const kid2: SugarElement<Element> = SugarElement.fromTag('div');
  Insert.append(parent, kid1);
  Insert.append(parent, kid2);
  
  // TODO: starting at kid1, find kid2
  export const foundKid2 = Traverse.parent(kid1).getOrDie().dom.childNodes.item(1);
  
  // TODO: starting at kid2, find kid1
  export const foundKid1 = Traverse.parent(kid2).getOrDie().dom.childNodes.item(0);
  
  // TODO: starting at parent, find both kids
  export const foundKids = parent.dom.childNodes
  
  // TODO: kid2 grew up - give it its own child node
  const kid3: SugarElement<Element> = SugarElement.fromTag('span');
  Insert.append(kid2, kid3);
  export const foundKid2Again = Traverse.parent(kid3).getOrDie();
//};

