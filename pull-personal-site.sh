#!/bin/bash

script_dir=$(dirname $0)

echo "Cloning into DONTSTOPLOVINGMEBABY.github.io source and installing dependencies\n\n"

if [ "$1" == "pull-env" ] || [ "$2" == "pull-env" ]; then
    echo "  --> Pulling environment from dotenv-vault" 
fi

if [ "$1" == "start" ] || [ "$2" == "start" ]; then
    echo "  --> Launching dev server" 
fi

git submodule update --init --recursive
cd DONTSTOPLOVINGMEBABY.github.io
npm install --silent

if [ "$1" == "pull-env" ] || [ "$2" == "pull-env" ]; then
    npx dotenv-vault@latest pull
fi

if [ "$1" == "start" ] || [ "$2" == "start" ]; then
    npm run-script dev
fi