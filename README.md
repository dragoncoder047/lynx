# Lynx

Lynx is a quick and easy flow-based programming tool that uses Scheme as a configuration language. Can'y say much about what it's been used for right now because it hasn't been... but I expect it will be eventually.

## [**&rarr;** Try it online! **&larr;**](https://dragoncoder047.github.io/lynx)

## [**&rarr;** Documentation **&larr;**](https://dragoncoder047.github.io/lynx/docs)

## Features

* **Compact syntax.** Creating a button that logs "Hello, World" when pressed is literally this simple:

    ```scm
    (chain (button) :clicked (value :d "Hello, World!") ::0 (log))
    ```

* **Tons of built-in examples.** Browse the [interactive examples page](https://dragoncoder047.github.io/lynx/examples) or look at the files [directly](./examples/files).
* **Linter to catch mistakes.** The [editor](https://dragoncoder047.github.io/lynx/editor) will show red error messages for each node or connection that caused problems (although there are still bugs with this system).
* **Built-in reference materials.** Not sure what a node does? Check the [reference page](https://dragoncoder047.github.io/lynx/docs/reference)

## Project Structure

* `docs/`, `editor/`, `runner/` - nothing in here besides the HTML shells for the respective pages. Some of the documentation here is hand-written in Markdown which is then rendered after the page loads by [`mdAll.ts`](./mdAll.ts).
* `build/` - output JS files, sourcemaps, and metadata. This is all automatically generated, don't touch it. It has to be committed for the github pages to work without me having to make a custom pages build action. I never figured that part out.
* `src/` - TS source files.
* `src/common/` - things that are shared between editor, runner, and documentation pages, that implement the real code functionality of Lynx.
* `src/editor/` - the main files and linter wrapper for the editor page (it isn't all one file, so I put them in a folder)
* `src/nodes/` - definitions for all of the node types that Lynx implements. This folder is a little bit more disorganized than the rest so if you send me a new node definition don't be surprised if I end up putting it in a seemingly random file.

## Hacking on Lynx

### General development

0. `git clone` this repository or your fork of it locally.
1. Make sure you have dependencies installed. I use [pnpm](https://pnpm.io) and the `pnpm-lock.yaml` is committed so installation should just be as simple as opening a terminal and running `pnpm i`. If you use `npm` or `yarn` it should still work but be slower. I have `.gitignore`'d both `npm-lock.json` and `yarn.lock` so that only the pnpm lockfile will actually be committed.
2. Open a background terminal and run `make`. This will start a nodemon daemon which will rebuild everything when you save a source file, plus a Python web server which will make your local Lynx build available at <http://localhost:8000/>.
3. If you don't need or want to open it in the browser, or nodemon isn't working for you, just run `make build` to build everything once and exit. `make serve` will start the Python web server separately.

### Adding a node

Nodes should not try to implement everything all at once. Each node should just be one "operation" (however you define it) and should store as little state as possible.

1. Find a good place to put the node definition.
    * If it is in an existing file, just call `defNode()` with the definition, and you're good.
    * If you want to create a new file, make sure to import `defNode()` and `Port`, and then add your new file to the list of imports in [all.ts](./src/nodes/all.ts) so that it will be picked up.
2. Try to copy the same kind of definition as existing nodes, and don't duplicate functionality that could be done with an existing node. (It is OK right now to add a new node if it could still be implemented by several existing nodes linked to each other; because I haven't implemented higher-order nodes, doing this would be rather tedious.)
3. The `stateKeys` list does literally nothing at runtime and is only there so that you can "declare" the state variables you will be using, and then TypeScript autocomplete can help you when you access `node.state`.
4. TypeScript will help you a lot catching node port name errors. If you feel you need to use `// @ts-ignore` -- don't!

### Adding a feature

(Features are global objects that implement some shared function, and aren't created initialized multiple times on multiple nodes. If Lynx is an entity-component-system kind of architecture, the nodes are the entities, the node definitions are the components, and the features are the systems.)

1. Same setup as for adding a node. Typically the feature goes in the same file as the nodes that use it.
2. `defFeature()` works differently than `defNode()`; since two different node definitions can (technically) have the same ID, `defNode()` just chucks all the definitions into a flat unkeyed list. However, features must be uniquely named, so `defFeature()` expects the feature ID as a separate parameter.
3. Also unlike node definitions, feature definitions are a class, not an interface. You need to call the `Feature` constructor, and it takes an async initialization function that will be run if any nodes that use the feature are created, and another object which are the feature's methods and properties. The properties will be `Object.assign()`'ed to the feature object.
4. To create a node that uses this feature:
    1. Create the rest of the definition as described above.
    2. Add the feature's ID to the `features` list property.
    3. The `setup()` hook in the node definition will now get a `features` object, that maps feature ID to the actual object. You may have to use square bracket notation to access things depending on the ID of the feature.
    4. When you try to use the feature object's methods, TypeScript **will** yell at you about no-such-property or something because it doesn't know the type of the feature object. Until I actually figure out how to type this, use `// @ts-expect-error` when you invoke the feature's methods or properties. **This is the only place where you are allowed to use `// @ts-expect-error`.**

### Adding an example

1. Create a new `.scm` file in `examples/files`.
2. At the bare minimum, the metadata fields `*title*`, `*category*`, and `*description*` are required.
3. When defining named nodes, try to stick to `kebab-case` for the names.
4. If you are creating a more full-featured app instead of just a small demo, these metadata fields are strongly recommended: `*author*` (your name or username), `*author-url*` (a link to your website), and `*version*` (a number; you don't need all that semver mess here).
5. If your example isn't even meant to be a demo of anything, and only serves as a regression test, set the metadata field `*hidden*` to true (`#t`) so it will not show up anywhere.
    * If you do this, technically only the `*hidden*` is required and title, category, and description are optional, but I still recommend using them.
    * If it is truly a test, set the category to `"Testing"`.
    * You can still access the example using the `?example=test-id` URL parameter in both the editor and runner. It just won't show up in the examples list page or editor dropdown.

## License

GPLv3. Basically you can do anything you want with Lynx except embed the Lynx source code into a commercial/nonfree project.
