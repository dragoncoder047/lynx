(define *title* "Function Node")
(define *category* "Advanced")
(define *description* "How to use the <code>(fn)</code> node to transform values.")

(chain (button "Randomize") :pressed
       (edges) :rising
       (random)
       0 (fn (1+ (floor (* (nth 0 $inputs) 100))))
       0 (log "Your random d100 value is "))
