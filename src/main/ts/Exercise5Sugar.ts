import { Element as SugarElement } from '@ephox/sugar';

// TODO: remove when we upgrade this tutorial to TinyMCE 5
import { Element, document } from '@ephox/dom-globals';

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

const se1 = SugarElement.fromDom(e1);

