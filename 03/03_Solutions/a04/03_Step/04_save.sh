#!/usr/bin/env bash
#
### Steps to build and run 0x_dockerfile
PARAMS='01_params.sh'
if [ ! -f $PARAMS ]; then  #??
    echo $PARAMS does not exist! #??
    exit 2  #??
  fi  #??
source $PARAMS
#check arguments
if test $# -lt 1;then #??
  echo "Error: version argument is required!" #??
  echo "Exit script." #??
  exit 1 #??
fi #??
# set version
version=$1
# commit container
newImage="readydocker1/judo:${version}"
echo "commit container ${container} to ${newImage}"
docker commit -a "Daniel Garavaldi <daniel.garavaldi@bzz>" judo ${newImage}
