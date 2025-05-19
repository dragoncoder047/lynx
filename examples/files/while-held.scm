(define *title* "Run While Held")
(define *description*
  "How to use the `(clock)` node to run something while a button is held down.")
(define *category* "Basic")

(chain (button "Press and hold") :pressed
       (not) :paused (clock :interval 100) ::1 (log ::0 "Holding"))
