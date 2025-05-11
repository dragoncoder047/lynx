(define *title* "LEGO Powered UP Test")
(define *description* "Testing of Lego Powered UP features.")
(define *category* "Testing")
(define *hidden* #t)

(chain (gamepad) :right-trigger :power (lpu:m-motor))
