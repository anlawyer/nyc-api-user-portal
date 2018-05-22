# User Portal for NYC data API

## Overview
This app is a simple user sign-up portal for the NYC City Record Online data API using a microservice architecture with Angular and Spring Boot. Given a "request for proposal" from the City of New York, this app is part of the proposal for creating a user portal to save and manage users who access the data API.

Find the Trello board, with user stories, for this project [here](https://trello.com/b/M2mwUqMR).
Check out the wireframes [here](https://www.figma.com/file/d7xlJuCSMG1HMJfNFTn97ud5/NY-data-API-User-Portal).

Find the deck with the proposal slides [here](https://docs.google.com/presentation/d/1Cr_WrK_7CxnLsQ3-G-PS-p-QDHff0So_nrGjVadWN3s/edit?usp=sharing).

### Instructions
These instructions assume you have SpringBoot, Angular and npm installed on your computer.

To run this project on your computer, clone the repo: 
```
git clone https://github.com/anlawyer/nyc-api-user-portal.git
cd nyc-api-user-portal
```
To run the back-end, run:
```
docker-compose up
```
To run the front end:
```
cd ui
npm install
npm start
```
