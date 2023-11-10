#!/bin/bash
#
git init
git add .
git commit -m "initial version"
git branch -M main
git remote add origin https://github.com/bzzlab/M324_Code.git
git push -u origin main
