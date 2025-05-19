(define *title* "Function Node")
(define *category* "Advanced")
(define *description* "How to use the `(fn)` node to transform values.")

(chain (button "Randomize") :pressed
       (edges) :rising
       (random)
       ::0 (fn (1+ (floor (* (nth 0 $inputs) 100)))) ::0
       ::1 (log ::0 "Your random d100 value is:"))
