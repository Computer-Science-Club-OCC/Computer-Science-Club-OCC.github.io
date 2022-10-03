# OCC Computer Science Club Website 
You can view a preview of the site here: 
https://computer-science-club-occ.github.io/

## Getting Started
Visit and follow instructions from <a href="https://github.com/Computer-Science-Club-OCC/Computer-Science-Club-OCC.github.io/wiki/Guide-for-Developers">Guide for Developers</a>

## Docker & Docker Compose
Docker compose will create a containerized environment for the frontend, backend, and mongo. To quickly start the entire stack on any machine with docker:


`docker-compose up`

To run just a mongo instance:

`docker-compose up -d mongo`

Stopping the environment:

`docker-compose down`

### Cleaning Docker Env
**Deleting the mongo container will delete all data in the database**
1. Stop the container(s) using the following command:
`docker-compose down`
2. Delete all containers using the following command:
`docker rm -f $(docker ps -a -q)`
3. Delete all volumes using the following command:
`docker volume rm $(docker volume ls -q)`
4. Restart the containers using the following command:
`docker-compose up -d`
