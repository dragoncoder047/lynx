# Lynx connection language

* Syntax Inspired by [Neva](https://github.com/nevalang/neva)
* Like [Zucchini](https://esolangs.org/wiki/Zucchini) and EV3-G combined
* Basic nodes like electronic circuits:
    * See those on [LogicEmu](https://lodev.org/logicemu/)
    * See those on EV3-G
    * [ ] Oscillators
    * [ ] Electronics building blocks
    * [ ] Tickers
    * [ ] Sequence generators
    * [ ] Converters for types
    * [ ] Random generators
    * [ ] math
    * [ ] Custom equation using math.js
* Input and output nodes:
    * [ ] Buttons
    * [ ] Switches
    * [ ] Sliders
    * [ ] Meters
    * [ ] Virtual joysticks
    * [ ] Number displays
    * [ ] Oscilloscopes
    * [ ] Indicator lights
    * [ ] Use phone to control - separate app instance
    * [ ] Basically any input/output supported by [web APIS](https://developer.mozilla.org/en-US/docs/Web/API)
        * [ ] Accelerometer
        * [ ] Audio nodes!!!
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
    * [ ] Gamepads
    * [ ] Notifications
    * [ ] Vibration
    * [ ] Text-to-speech
    * [ ] Speech recognition
    * [ ] WebRTC/Presentation API for remote controller on phone??
* Different types for data
    * [ ] Number
    * [ ] Float
    * [ ] Integer
    * [ ] String
    * [ ] Boolean
    * [ ] AudioStream
    * [ ] Image with composing (canvas api)
    * [ ] 2D vector
    * [ ] 3D vector
    * [ ] Color
    * [ ] Trigger
    * [ ] Node reference (special)
* [X] S-expression savefile format
* [ ] "Bus" nodes that contain an array of data

## Need to

* [X] Define savefile format
    * [X] Create a node `(type args)`
    * [X] Name a node `(define name (xxx))`
    * [ ] Create a higher order node `(define (name . args))`
    * [X] Reference a named node `name`
    * [X] Select an output `:name`
    * [X] Select an input `:name`
    * [X] Go back in the chain N nodes: `@nodeTo`
    * [X] Partition groups `~`
    * [X] Reference Nth of bus port: number
* [X] nodes that instantiate based on connections
* [ ] unify generics and template mess into type params objects
    * [ ] Make inputs' static values be in initializer params NOT anything specific
* [ ] TYPESCRIPT
* [ ] Write documentation
* [X] Do linter in Ace
    * [ ] Display error squiggles
    * [X] Hover tooltips for nodes
* [X] Better error messages for nodes
    * [X] Node xxx has no input/output named :xxx
    * [X] Cannot determine variant to use
* [ ] Fix variant assignment algorithm
    * [X] Process chains down to Node => NodeDef list variants map and \[Node, Node, symbol[]] list of links
    * WFC algorithm
        1. make map of node connection => any errors associated, and map of Node => NodeDef => template vars
        2. loop over each node pair
        3. loop through all possible variant combinations
        4. check valid connections based on these
        5. if any variants wound up with no valid connections generated remove them, add descriptive error message to errors map, and set changing to true
        6. when no changes were made exit loop
        7. find all the nodes that don't have only one possibility for variant and throw errors associated with them
        8. otherwise assign the variants, make all the connections and voila.

## resources

<https://github.com/ajaxorg/ace/commit/01d4605c0dcf7bcbb4f1a09a243f7ef6d16d7d43#diff-9e7f24747d06e0524d584558e2744b5b5fcf83acbe4541c61af4a1cf8dc8f978R114> shows how to do error annotation + tooltip

* maybe: make editor using [rete.js](https://retejs.org)
