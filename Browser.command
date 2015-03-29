#!/bin/bash

# echo "The script you are running has basename `basename $0`, dirname `dirname $0`"
# echo "The present working directory is `pwd`"

cd "`dirname "$0"`"

open /Applications/Google\ Chrome.app http://localhost:1234

gfms -p1234 -n -a



