# InvestmentsManagementSystem
Frontend of web application that stores information about current investments in a company with a list of required tasks for each and possibility to upload necessary documents. Project of backend side can be found here: https://github.com/MartaSwierczewska/InvestmentsManagementSystem_backend. It contains more advanced README with users functionalities. 

## Technologies
React

## Run application 

### Prerequisites 
Since project consist of Docker images it is possible to run it using Dockerfile. 

It can be started using npm. Version of node.js required `node:13.12.0`

### Clone
Clone this repo to your machine using git clone https://github.com/MartaSwierczewska/InvestmentsManagementSystem_frontend.git (https) or git clone git@github.com:MartaSwierczewska/InvestmentsManagementSystem_frontend.git (ssh)

### Available commands

#### Building image and running app:
`docker build -t frontend:0.0.1`

`docker run -p 3000:3000 frontend:0.0.1`

Application is running locally and can be seen under local address: `http://localhost:3000/`

#### Starting container:
docker start `CONTAINER_ID`

#### Stopping container:
docker stop `CONTAINER_ID`

#### Running with npm:
`npm install`

`npm start`
