(define *title* "Function Node")
(define *category* "Advanced")
(define *description*
  "How to use the [`(fn)`](../docs/reference#node-fn) node to transform values.

   This example creates a button that, when pressed, generates a random
   number between 1 and 100 and logs it. Except, instead of using math, log, and random nodes,
   it uses one function node to generate the random number, do the math, and log it.")

(chain (button "Randomize") :clicked ::0
       (fn
          (let* ((mul 100)
                 (num (1+ (floor (* (random) mul)))))
               ($app.log (format "Your random d~a value is: ~a" mul num)))))
