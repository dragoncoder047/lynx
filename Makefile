.PHONY: serve serveout
serve:
	python3 -m http.server
serveout:
	@echo "Accessible at:"
	@ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $$2}'
	@echo
	python3 -m http.server -b 0.0.0.0 8000
