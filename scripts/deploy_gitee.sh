#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add gitee git@gitee.com:leerongyue/morney-react-website.git &&
git push -u gitee master -f
cd -