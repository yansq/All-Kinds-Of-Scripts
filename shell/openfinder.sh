#!/bin/bash

# open finder in current terminal path
#
# add path of this file into ~/.bash_profile, and run 'source ~/.bash_profile'
# if you use zsh, add 'source ~/.bash_profile' into ~/.zshrc, then run 'source ~/.zshrc'
# to alias it, add "alias openfinder='your/path/to/this/command'" in ~/.bash_profile

cd "$(dirname "$1")"
open .
