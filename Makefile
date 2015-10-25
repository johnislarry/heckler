all:
	jstransform --strip-types --harmony --watch src/ build/&

buildonce:
	jstransform --strip-types --harmony src/ build/

run: buildonce
	node --use_strict build/main.js

clean:
	rm build/*
