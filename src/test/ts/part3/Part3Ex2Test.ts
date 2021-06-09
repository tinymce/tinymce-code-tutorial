import { UiFinder } from '@ephox/agar';
import { describe, it } from '@ephox/bedrock-client';
import { TinyAssertions, TinyDom, TinyHooks } from '@ephox/mcagar';
import { Editor } from 'tinymce';

describe('Part3Ex2Test', () => {
  /*
  So you might have noticed that the code we had to write in exercise 1 was a
  lot of effort. It also could be made nicer in a few ways:

  - If the test fails, leave the editor on-screen so you can look at what went
    wrong
  - someone please help me think of cool things about TinyHooks before I merge
  this

  Enter the TinyHooks module, from mcagar (mc - Tiny[MC]E, agar - another
  in-house testing library, more on that later). It lets you write the following.
   */
  const hook = TinyHooks.bddSetup<Editor>({
    // And then you put your settings in here
    toolbar: 'bold',
    // No need to add a "setup" or "init_instance_callback" here unless you
    // need one for the actual test you're writing.
  });

  it('looks like an editor', () => {
    /*
    You can use this hook object only inside a test (so that you know the before
    callback has been run), and you use it like this.
     */
    const editor = hook.editor();

    // Now what?
    // Let's just make sure that the bold button we asked for is there

    // the element containing the editor and all of its UI (TinyDom is another
    // mcagar API, this one gets SugarElements out of editor things).
    const container = TinyDom.container(editor);

    // assert a bold button is in the container
    // This is from the agar library, as it's a generic utility that isn't
    // strictly editor-related
    UiFinder.exists(container, 'button[title="Bold"]');
  });

  it('has content like an editor', () => {
    const editor = hook.editor();

    editor.setContent(/* TODO */ "<p>Hello world</p>");

    /*
    Anther useful module from mcagar, TinyAssertions is full of ways to make
    sure that the content inside the editor is what you want it to be. Content
    presence takes an object where the keys are CSS selectors, and the values
    are numbers saying how many elements should match that selector inside the
    editor.

    TODO: Edit the setContent call above to make this test pass.
     */
    TinyAssertions.assertContentPresence(editor, {
      p: 2,
      span: 1
    });
  });
});