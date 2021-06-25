import { Cursors } from '@ephox/agar';
import { beforeEach, describe, it } from '@ephox/bedrock-client';
import { TinyAssertions, TinyDom, TinyHooks, TinySelections } from '@ephox/mcagar';
import { Traverse } from '@ephox/sugar';
import { assert } from 'chai';
import { Editor } from 'tinymce';

describe('Part3Ex3Test', () => {
  const hook = TinyHooks.bddSetup<Editor>({ height: '100vh' });

  beforeEach(() => {
    // Fun fact, hook.editor() also works inside of before / beforeEach
    // callbacks, as long as you declare the hook first.

    const editor = hook.editor();
    editor.setContent([
      '<p>Here is a bit of content</p>',
      '<p>And some <strong>bolded</strong> content</p>',
      '<p><img src="https://http.cat/301.jpg" alt="A cat picture" /></p>'
    ].join(''));
  });

  it('selects content like an editor', () => {
    const editor = hook.editor();

    /*
    Now we're going to talk about one of the more complicated parts of editor
    development: selections.

    It's very rare you'll need to deal with moving the selection around early
    in your training, and make sure to chat with a senior dev about what you're
    doing if you do need to. However, for a lot of tests its important to change
    the selection, or make assertions based on it.

    Under most circumstances, you can think of the selection as two
    node/offset pairs. The node tells you which DOM node the selection starts (or ends) in
    and the offset tells you how far into that node the selection starts (or
    ends). If your node is a HTMLElement, then the offset is going to tell you
    how many of the node's ChildNodes are before the selection endpoint. If
    your node is a Text, then the offset is going to tell you how many
    characters into the text your selection endpoint is.

    This concept is summed up really nicely by the builtin "Range" API exported
    by the browser. Let's create a Range object, and make sure it works.
     */
    const range = document.createRange();

    const contentBody = TinyDom.body(editor);
    // Let's get the <p>And some <strong>bolded</strong> content</p>
    const paragraph = Traverse.child(contentBody, 1).getOrDie('Unable to find second child of editor body');
    // And then get the <strong>bolded</strong> (child 0 would be the text node "And some ")
    const strong = Traverse.child(paragraph, 1).getOrDie('Unable to find second child of paragraph');
    // And finally let's get the text node "bolded"
    const text = Traverse.child(strong, 0).getOrDie('Unable to find text inside strong element');

    range.setStart(text.dom, 0);
    range.setEnd(text.dom, 'bolded'.length);

    editor.selection.setRng(range);

    assert.equal(editor.selection.getContent(), 'bolded');
  });

  it('selects content like an editor, take II', () => {
    const editor = hook.editor();
    /*
    Now in the last test, we put together a block of code that's a really good
    teaching opportunity for another mcagar API. Here's the code in question

    const contentBody = TinyDom.body(editor);
    // Let's get the <p>And some <strong>bolded</strong> content</p>
    const paragraph = Traverse.child(contentBody, 1).getOrDie('Unable to find second child of editor body');
    // And then get the <strong>bolded</strong> (child 0 would be the text node "And some ")
    const strong = Traverse.child(paragraph, 1).getOrDie('Unable to find second child of paragraph');
    // And finally let's get the text node "bolded"
    const text = Traverse.child(strong, 0).getOrDie('Unable to find text inside strong element');

    And here's how you'd do all of this with an agar API.
     */
    const contentBody = TinyDom.body(editor);
    const text = Cursors.follow(contentBody, [ 1, 1, 0 ]).getOrDie();
    /*
    Each number in this array represents a call to "Traverse.child(..., <number>)"
    in a loop, walking down step by step from the container to the node you want to end on.

    Then, to make things even simpler, we can use mcagar to do all of this
    (get the editor body, walk down to the bottom node, create the range and set
    the selection) in one go, like this.
     */
    TinySelections.setSelection(editor, [ 1, 1, 0 ], 0, [ 1, 1, 0 ], 'bolded'.length);

    assert.equal(editor.selection.getContent(), 'bolded');
  });

  it('operates on the selection', () => {
    const editor = hook.editor();

    // TODO: move the selection to around the words "a bit of"

    // TODO: use an editor command to underline that content (https://www.tiny.cloud/docs/advanced/editor-command-identifiers/)

    TinyAssertions.assertContent(editor, [
      '<p>Here is <span style="text-decoration: underline;">a bit of</span> content</p>',
      '<p>And some <strong>bolded</strong> content</p>',
      '<p><img src="https://http.cat/301.jpg" alt="A cat picture" /></p>'
    ].join('\n'));

    // TODO: Write an assertion to test your changes (hint: TinyAssertions)
  });
});
