## GENERAL TODO

* [ ] Fix bug where output port not existing error gets suppressed in some cases
* [ ] Make examples finder/loader work with nested directories
* [X] Define savefile format
    * [X] Create a node `(type args)`
    * [X] Name a node `(define name (xxx))`
    * [ ] Create a subgraph template `(define (name . args))`
    * [X] Reference a named node `name`
    * [X] Select an output `:name`
    * [X] Select an input `:name`
    * [X] Go back in the chain: `@nodeTo`
    * [X] Partition groups `~`
    * [X] Reference Nth of bus port: number
* [X] nodes that instantiate based on connections
* [X] unify generics and template mess into type params objects
    * [X] Make inputs' static values be in initializer params NOT anything specific
* [X] TYPESCRIPT
* [X] Write documentation
* [X] Do linter in Ace
    * [X] Display error squiggles
    * [ ] Hover tooltips for nodes
* [X] Better error messages for nodes
    * [X] Node xxx has no input/output named :xxx
    * [X] Cannot determine variant to use

## POSSIBLE NODES

* Syntax Inspired by [Neva](https://github.com/nevalang/neva)
* Like [Zucchini](https://esolangs.org/wiki/Zucchini) and EV3-G combined
* Basic nodes like electronic circuits:
    * See those on [LogicEmu](https://lodev.org/logicemu/)
    * See those on EV3-G
    * [ ] Sequence generators
    * [ ] Converters for types
    * [X] Random generators
    * [X] math
    * [ ] Custom equation using math.js ??
* Input and output nodes:
    * [X] Buttons
    * [ ] Switches
    * [X] Sliders
    * [X] Meters
    * [ ] Virtual joysticks
    * [X] Number displays
    * [ ] Oscilloscopes
    * [ ] Indicator lights
    * [ ] Basically any input/output supported by [web APIS](https://developer.mozilla.org/en-US/docs/Web/API)
        * [ ] Audio nodes!!!
            * Possibly using Tone.js
            * [ ] Oscillators
            * [ ] Noise
            * [ ] Filters
                * [ ] Low-pass
                * [ ] High-pass
                * [ ] Band-pass
                * [ ] Band-stop
            * [ ] Audio file
            * [ ] User's mic
            * [ ] Amplifier
            * [ ] Speakers
                * [ ] Left
                * [ ] Right
                * [ ] more channels?
            * [ ] Analyzer
            * [ ] Panner
        * [ ] Graphics!!
            * Possibly using SVG.js
            * [ ] Canvas
            * [ ] Line objects
            * [ ] Rectangle
            * [ ] Fill
            * [ ] Text drawing
            * [ ] Scale
            * [ ] Rotate
            * [ ] Translate
            * [ ] getUserMedia
    * [X] Gamepads
    * [X] Notifications
    * [ ] Text-to-speech
    * [ ] Speech recognition
    * [ ] WebRTC/Presentation API for remote controller on phone??
* Different types for data
    * [X] Number
    * [X] Float
    * [X] Integer
    * [X] String
    * [X] Boolean
    * [ ] AudioStream
    * [ ] Image with composing (canvas api)
    * [X] 2D vector
    * [ ] 3D vector
    * [X] Color
    * [X] Trigger
    * ~~[ ] Node reference (special)~~
* [X] S-expression savefile format
* [X] "Bus" nodes that contain an array of data

## RESOURCES

<https://github.com/ajaxorg/ace/commit/01d4605c0dcf7bcbb4f1a09a243f7ef6d16d7d43#diff-9e7f24747d06e0524d584558e2744b5b5fcf83acbe4541c61af4a1cf8dc8f978R114> shows how to do error annotation + tooltip

* maybe: make editor using [rete.js](https://retejs.org)
