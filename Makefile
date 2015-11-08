all:
	babel --watch=src --out-dir=build &

buildonce:
	babel src --out-dir=build

run: buildonce
	node build/main.js

clean:
	rm build/*
