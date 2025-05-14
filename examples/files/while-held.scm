(define *title* "Run While Held")
(define *description*
  "How to use the `(clock)` node to run something while a button is held down.")
(define *category* "Basic")

(chain (button "Press and hold") :pressed
       (clock 100) (log "Holding"))
