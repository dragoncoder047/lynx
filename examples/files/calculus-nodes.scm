(define *title* "Time Calculus")
(define *description* "Demonstrates the use of the integrate and derivative nodes.")
(define *category* "Math")

; Integrate a value over time and show the result
(chain (range :label "Input Value" :min -1 :max 1 :step 0.01) :value (integrate) :f (output :label "Integral: ∫x dt = "))

; Show the derivative of a changing value
(chain (range :label "Input Value" :min -10 :max 10 :step 0.1) :value (derivative) :df (output :label "Derivative: dx/dt = "))
