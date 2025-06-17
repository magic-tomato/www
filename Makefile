.PHONY: proto pigeon

all: help

prepare:
	# install taildwind locally, needed for Jetbrains Goland
	# https://github.com/tailwindlabs/tailwindcss-intellisense?tab=readme-ov-file#troubleshooting
	npm install

build:
	hugo build --cleanDestinationDir --minify --gc

dev:
	hugo server --buildDrafts --cleanDestinationDir

clean:
	rm -rf public/ resources/_gen/ .hugo_build.lock

help:: ## Print this message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
