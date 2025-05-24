(define *title* "Logic Gates")
(define *description* "Demonstrates the use of all 6 logic gates.")
(define *category* "Basic")

(define A (checkbox :label "A "))
(define B (checkbox :label "B "))
(define C (checkbox :label "C "))

(define and-out   (output :label "AND(A, B, C): "))
(define nand-out  (output :label "NAND(A, B, C): "))
(define or-out    (output :label "OR(A, B, C): "))
(define nor-out   (output :label "NOR(A, B, C): "))
(define xor-out   (output :label "XOR(A, B, C): "))
(define xnor-out  (output :label "XNOR(A, B, C): "))
(define not-a-out (output :label "NOT(A): "))

(chain A ::0 (every)    and-out  ~ B ::1 @every    ~ C ::2 @every)
(chain A ::0 (some)     or-out   ~ B ::1 @some     ~ C ::2 @some)
(chain A ::0 (parity-1) xor-out  ~ B ::1 @parity-1 ~ C ::2 @parity-1)
(chain A ::0 (not-all)  nand-out ~ B ::1 @not-all  ~ C ::2 @not-all)
(chain A ::0 (none)     nor-out  ~ B ::1 @none     ~ C ::2 @none)
(chain A ::0 (parity-0) xnor-out ~ B ::1 @parity-0 ~ C ::2 @parity-0)
(chain A (not)          not-a-out)

(define layout
    (layout
        (flex column
            (flex row 0 "  " 1 "  " 2)
            (table (3 4 5)
                   (6 7 8)
                   (9)))))

(chain A         :el ::0 layout)
(chain B         :el ::1 layout)
(chain C         :el ::2 layout)
(chain and-out   :el ::3 layout)
(chain or-out    :el ::4 layout)
(chain xor-out   :el ::5 layout)
(chain nand-out  :el ::6 layout)
(chain nor-out   :el ::7 layout)
(chain xnor-out  :el ::8 layout)
(chain not-a-out :el ::9 layout)
