all:
	jstransform --strip-types --harmony --watch src/ build/&

clean:
	rm build/*
