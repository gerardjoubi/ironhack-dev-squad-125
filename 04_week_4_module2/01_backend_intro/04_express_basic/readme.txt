# install process
# ---------------

# place project under control of npm
npm init -y

# install express as permanent dependency
npm i --save express

# start nodemon daemon to watch/restart app.js on save
nodemon app.js