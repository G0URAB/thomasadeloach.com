# Project SetUp
- First make sure docker and docker-compose is installed.
- Start the docker service. Then clone the project. After that, in the root folder run the following command
> docker-compose up --build
- If everything went well, then the project website can be visited at **localhost:8080**
- This project has one more dependency i.e. Node.JS. Currently, hot reload is not working inside the node container. Therefore, we will have to do that manually. 
Install Node JS globally. Go to **app** folder and run the following command
> npm run watch

With the above watch, everytime we make changes to vue or other assets then they will be compiled automatically. With a reload of the page, we can see the changes.
Definitely, this is inconvenient but we will fix this soon with a hot reload with node docker container.

# Staging Website
https://pastor-thomas.herokuapp.com/
