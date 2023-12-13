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
docker run --privileged --name "$container" \
  -itd --rm -p 8083:8080 \
  -p 50003:50000 \
  -v $HOME/jenkins_home:/var/jenkins_home:rw \
  "$image"
  #-v /var/run/docker.sock:/var/run/docker.sock:rw \

#docker exec --privileged -it "$container" sh -c "jenkins --httpPort=8083 &"
#docker exec -it judo bash -c "jenkins --httpPort=8083 &"
docker exec --privileged -it "$container" bash

# 8f0e495a9d2b4e32b80db611c448a7aa
