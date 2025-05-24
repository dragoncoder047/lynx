; These are metadata fields - title shows the title,
; the rest are just for your own use. However these
; are used by the code that displays the list of
; examples on the main page. 
(define *title* "Hello World")
(define *description*
  "A simple introduction to what Lynx can do: creating nodes,
   linking them, and using implicit inputs. This example creates a button
   that, when pressed, logs 'Hello, World!' in a very roundabout way.")
(define *version* 1)
(define *category* "Basic")
(define *author* "dragoncoder047")
(define *author-url* "https://dragoncoder047.github.io/")

(chain
       ; Create a button with the text "Click me!".
       (button "Click me!")
       ; Select a trigger for when the button is clicked.
       :clicked
       ; When the trigger fires, send the value "World!"...
       (value :d "World!")
       ; ...and log it with the prefix "Hello,".
       ::1 (log ::0 "Hello,"))
       ; Things to try:
       ; * Switch the ::1 and ::0 above -- does that change the output?
       ; * Change the ::1 to ::22 -- where is the extra space coming from?
       ; * Change both to ::0 -- why does this not work?
       ; * Change the :clicked to :pressed -- why does this not work?
