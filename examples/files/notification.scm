(define *title* "Send Notification")
(define *category* "UI")
(define *description*
    "How to send notifications using the [`(notification)`](../docs/reference#node-notification) node.")

(chain (button "Click me!") :clicked
    :trigger (notification :body "You clicked the button"))
