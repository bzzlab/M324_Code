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
echo "run now container"
docker run --name "$container" \
  -itd --rm -p 8083:8080 \
  -p 50003:50000 \
  -v $HOME/jenkins_home:/var/jenkins_home:rw \
  "$image"
