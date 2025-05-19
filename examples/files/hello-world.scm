; These are metadata fields - title shows the title,
; the rest are just for your own use. However these
; are used by the code that displays the list of
; examples on the main page. 
(define *title* "Hello World")
(define *description*
  "A simple introduction to what Lynx can do.")
(define *version* 1)
(define *category* "Basic")
(define *author* "dragoncoder047")
(define *author-url* "https://dragoncoder047.github.io/")

; Hover over each of the nodes (button, edges, value, and log)
; below to see what they do.
(chain (button "Click me!") :pressed
       (edges) :rising
       (value :value "World!") ::1 (log ::0 "Hello,")
       ~ @button :hovering (edges) :rising ::1 (log ::0 "You are hovering on the button!")
       ~ @edges :falling ::1 (log ::0 "You stopped hovering the button!"))
