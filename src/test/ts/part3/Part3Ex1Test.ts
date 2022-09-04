import { UiFinder } from "@ephox/agar";
import { describe, it } from "@ephox/bedrock-client";
import { TinyAssertions, TinyDom, TinyHooks } from "@ephox/mcagar";
import { Editor } from "tinymce";

/*
In this part we're going to discuss working with the editor in a little more
detail. We'll look at this under the pretense of writing tests for editor
functionality, and try to sneak in some knowledge about the editor itself as we
go.
 */
describe("Part3Ex1Test", () => {
  /*
  Enter the TinyHooks module, from mcagar (mc - Tiny[MC]E, agar - another
  in-house testing library, more on that later). It lets you write the following.
   */
  const hook = TinyHooks.bddSetup<Editor>({
    // And then you put your settings in here
    toolbar: "bold",
  });
  /*
  NOTE: Even though we have assigned the result of our call to TinyHooks to a variable,
  we cannot use it inside the "describe" block. This is because TinyHooks "hooks" in to
  the lifecycle methods of the "describe" function to run setup code. We will use this hook
  variable inside a test (an "it" block).
  */

  /*
  TinyHooks takes care of a lot of important setup and teardown logic.
  It's important to understand the lifecycle hooks and how TinyHooks utilises them.

  DONE: Take a look through Bedrock's docs and the BDD APIs available.

  McAgar's BDD docs:
  https://github.com/tinymce/tinymce/blob/develop/modules/mcagar/docs/bdd.md

  BDD APIs:
  https://github.com/tinymce/tinymce/tree/develop/modules/mcagar/src/main/ts/ephox/mcagar/api/bdd
  */

  it("looks like an editor", () => {
    // it is safe to access the hook inside an "it" block.
    const editor = hook.editor();
    // Now what?
    // Let's just make sure that the bold button we asked for is there

    // TinyDom is another mcagar API that has various helper functions for
    // getting TinyMCE DOM elements as SugarElements
    // TinyDom.container(editor) returns the element that contains the editor and all of its UI
    const container = TinyDom.container(editor);

    // assert a bold button is in the container
    // UiFinder is from the agar library, as it's a generic utility that isn't
    // TinyMCE-specific (that's why you have to pass in the scope to search
    // for the selector in)
    UiFinder.exists(container, 'button[title="Bold"]');
  });

  it("has content like an editor", () => {
    const editor = hook.editor();

    editor.setContent(
      /* DONE - tinymce removes unstyled spans */
      `
      <p>A paragraph with <span style="text-decoration: underline;">a span</span></p>
      <p>A second paragraph</p>
      `
    );

    /*
    Another useful module from mcagar, TinyAssertions is full of ways to make
    sure that the content inside the editor is what you want it to be. Content
    presence takes an object where the keys are CSS selectors, and the values
    are numbers saying how many elements should match that selector inside the
    editor.

    DONE: Edit the setContent call above to make this test pass.
     */
    TinyAssertions.assertContentPresence(editor, {
      p: 2,
      span: 1,
    });
  });
});
