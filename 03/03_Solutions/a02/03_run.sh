#!/usr/bin/env bash
#
### Steps to build and run 0x_dockerfile
PARAMS='01_params.sh'
if [ ! -f $PARAMS ]; then  #??
    echo $PARAMS does not exist! #??
    exit 2  #??
  fi  #??
source $PARAMS
# run image
echo "run now container $container"
docker run -itd --rm \
  -p 3000:3000 \
  --name "$container" "$image"

