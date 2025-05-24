(define *title* "Geolocation")
(define *description*
  "A test of the [`geolocation`](../docs/reference#feat-geolocation) feature.
   Logs your geolocation data every time it updates.")
(define *category* "Testing")

(define pos (output :label "Position (lon, lat): "))
(define alt (output :label "Altitude: "))
(define head (output :label "Heading: "))
(define speed (output :label "Speed: "))

(chain (gps) :pos :value pos
    ~ @gps :altitude :value alt
    ~ @gps :heading :value head
    ~ @gps :speed :value speed)
