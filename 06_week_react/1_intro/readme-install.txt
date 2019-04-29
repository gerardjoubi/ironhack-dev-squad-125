# 1 - base environment : node + npm must be installed

# 2 - this time, the full environment is hard to install from scratch so :
npm install -global create-react-app

# this command will install all the necessary dependencies to get started with react
create-react-app cool-app-name

# if your app folder is already created, the next command will install in current folder
create-react-app .

# react (react core) + react-dom (react browser version) + react-scripts (create-react-app core)
# once download and compiled ...
cd cool-app-name
code .

# src will contain our source-code
# index.js is the starting point of our app
# public contain index.html
# dev-hint: index.js AND index.html are the only mandatory files !!!
# react-scripts comes with many dependencies, including Jest (test runner == Jasmine)