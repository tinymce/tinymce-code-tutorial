import { after, before, describe, it } from '@ephox/bedrock-client';
import { Attribute, Insert, Remove, SelectorFind, SugarBody, SugarElement } from '@ephox/sugar';

import { assert } from 'chai';
import tinymce from 'tinymce';

/*
In this part we're going to discuss working with the editor in a little more
detail. We'll look at this under the pretense of writing tests for editor
functionality, and try to sneak in some knowledge about the editor itself as we
go.
 */

describe('Part3Ex1Test', () => {
  it('looks like an editor', () => {
    /*
    For now, let's stick with a basic test. Does an editor exist? We can figure
    this out using the TinyMCE global - by importing it directly from
    node_modules, we can avoid the script tag and the API key - in the docs for
    our customers we refer to this as "self-hosting"
     */
    assert.isNotEmpty(tinymce.editors);
  });

  /*
  Now we just need to find a way to make sure that our test passes. Firstly, we
  need to make sure that the editor exists before the test is run.

  Note: Normally we would keep before and after blocks above the tests they're
  affecting. We've ordered things this way here for educational purposes only.
   */
  before(function (done) {
    /*
    Loading the editor takes a while, and waiting for the editor to load can
    lead to timeouts. Let's make sure we have time to do everything we need to.
    Note: this is why we're using the function keyword instead of an arrow
    function.
     */
    this.timeout(4000);

    /*
    For the editor to load, it needs to be passed an element that's in the body.
    In the past we did this by including the target element in our HTML, and
    using the "selector" field in the settings, but there's another way if you
    want to be more programmatic about it.

    Let's create an element manually, and put it in the document body.
     */
    const element =
      /* TODO: create a text area element using sugar */
      null as unknown as SugarElement<HTMLTextAreaElement>;

    Insert.append(SugarBody.body(), element);
    Attribute.set(element, 'id', 'remove-me-later');

    tinymce.init({
      // Instead of passing a selector, you can just pass in an element directly.
      target: element.dom,
      /*
      setup is a very useful method. The callback we write here will be run
      using the editor as its argument as the editor is being created, and we
      can do whatever we need to as the editor is initialising.
       */
      setup: (editor) => {
        /*
        For this test, we don't need to do anything while the editor is
        initialising. However, we do need to make sure that the test above isn't
        run until the editor is ready. Let's wait for the "init" event to fire
        before we signify that we're ready for the tests to run.

        This actually brings up a very important point - the window of time
        between when setup is called and when the init event is fired is one you
        need to be very careful during. Even though the editor exists, most of
        its APIs and features won't work until after initialisation is finished.

        For some use-cases, specifying init_instance_callback is more useful.
        https://www.tiny.cloud/docs/configure/integration-and-setup/#init_instance_callback
         */
        editor.once('init', () => {
          done();
        });
      },
      // This is a workaround to get the editor to load from node modules. You
      // can forget about it, it's only really necessary in this example
      base_url: '/project/node_modules/tinymce'
    });
  });

  // Now we need to clean up
  after(() => {
    // First, let's get rid of the editor
    tinymce.editors[0].remove();

    // Second, let's get rid of the element that was holding the editor
    const element = SelectorFind.descendant(SugarBody.body(), '#remove-me-later');
    // TODO: the following code won't work because element is an Optional.
    // Remove.remove(element);
  });
});