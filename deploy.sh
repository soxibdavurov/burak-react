#!/bin/bash

#PRODUCTION
git reset --hard
<<<<<<< HEAD
git checkout main
git pull origin main
=======
git checkout master
git pull origin master
>>>>>>> develop

npm i yarn -g
yarn global add serve
yarn
yarn run build
pm2 start "yarn run start:prod" --name=BURAK-REACT

# #DEVELOPMENT
# git reset --hard
# git checkout develop
# git pull origin develop

# npm i
# pm2 start "npm run start:dev" --name=BURAK