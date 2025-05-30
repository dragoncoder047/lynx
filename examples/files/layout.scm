(define *title* "Layout")
(define *description* "Demonstrates the use of creating HTML layouts using different layout types.")
(define *category* "UI")

(define flex-button (button "Use flex-box layout"))
(define table-button (button "Use table layout"))

(define btn (button "Reset to middle"))
(define slider (range :label "The value" :min 0 :max 100))
(define out (meter :label "The value again" :min 0 :max 100))
(chain slider :value :value out)
(chain btn :clicked (value :d 50) :value slider)

(define table-layout
    (layout
        (table ("The slider" 1)
               ("The button" 0)
               ("The label" 2))))
(define flex-layout
    (layout
        (flex row "The button" 0 "The slider" 1 "The label" 2)))

(chain btn :el ::0 table-layout)
(chain slider :el ::1 table-layout)
(chain out :el ::2 table-layout)

(chain btn :el ::0 flex-layout)
(chain slider :el ::1 flex-layout)
(chain out :el ::2 flex-layout)

(chain flex-button :clicked :refresh flex-layout)
(chain table-button :clicked :refresh table-layout)

(define which-shown (sr-latch))
(chain flex-button :clicked ::0 (merge-signals) (pulse) :s which-shown
    ~ (on-start) ::1 @merge-signals)
(chain table-button :clicked (pulse) :r which-shown)
(chain which-shown :q :hide table-layout)
(chain which-shown :q (not) :hide flex-layout)

; recursive layout!!
(chain flex-button :el ::0 (layout (flex column 0 1 2 3))
    ~ table-button :el ::1 @layout
    ~ table-layout :el ::2 @layout
    ~ flex-layout :el ::3 @layout)
