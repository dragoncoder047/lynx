.PHONY: dev build serve serveout lint watch

MAKEFLAGS += -j2
dev: serve watch

build:
	node scripts/build.mjs -i mdAll.ts -o build/mdAll.js
	node scripts/build.mjs -i src/runner_main.ts -o build/runner_main.js
	node scripts/build.mjs -i src/refpage_main.ts -o build/refpage_main.js
	node scripts/build.mjs -i src/examples_page_main.ts -o build/examples_page_main.js
	node scripts/build.mjs -i src/editor/main.ts -o build/editor_main.js

serve:
	python3 -m http.server

serveout:
	@echo "Accessible at:"
	@ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $$2}'
	@echo
	python3 -m http.server -b 0.0.0.0 8000

lint:
	tsc

watch:
	pnpm npm-watch build
