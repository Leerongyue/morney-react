#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add github git@github.com:Leerongyue/morney-react-website.git &&
git push -u github master -f
cd -