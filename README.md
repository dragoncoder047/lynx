# Lynx

Lynx is a quick and easy flow-based programming tool that uses Scheme as a configuration language. Can'y say much about what it's been used for right now because it hasn't been... but I expect it will be eventually.

## [**&rarr;** Try it online! **&larr;**](https://dragoncoder047.github.io/lynx)

## [**&rarr;** Documentation **&larr;**](https://dragoncoder047.github.io/lynx/docs)

## Features

* **Compact syntax.** Creating a button that logs "Hello, World" when pressed is literally this simple:

    ```scm
    (chain (button) :clicked (value :d "Hello, World!") ::0 (log))
    ```

* **Built-in reference materials.** Not sure what a node does? Not sure what syntax to use? Check the [reference page](https://dragoncoder047.github.io/lynx/docs/reference)
* **Tons of examples.** Browse the [interactive examples page](https://dragoncoder047.github.io/lynx/examples) or look at the files [directly](./examples/files).
* **Linter to catch mistakes.** The [editor](https://dragoncoder047.github.io/lynx/editor) will show red error messages for each node or connection that caused problems[^1].
* **Shareable.** 

Head over to [HACKING.md](./HACKING.md) for a guide on contributing to Lynx itself!

## License

GPLv3. Basically you can do anything you want with Lynx except embed the Lynx source code into a commercial/nonfree project.

[^1]: Most of them. There are still bugs with this system.
