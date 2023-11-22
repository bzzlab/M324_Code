#!/usr/bin/env bash
#
PARAMS='01_params.sh'
if [ ! -f $PARAMS ]; then  #??
    echo $PARAMS does not exist! #??
    exit 2  #??
  fi  #??
source $PARAMS
# Login to docker hub (you need an account)
docker login
# push image to your account
docker push "$image"


