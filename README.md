# User Portal for NYC data API

Live version of the app, hosted on AWS: http://alison-nyc-api-user-portal.s3-website-us-west-1.amazonaws.com/.

## Overview
This app is a simple user sign-up portal for the NYC City Record Online data API using a microservice architecture with Angular and Spring Boot. Along with a Eureka server and a Zuul Api Gateway, the app uses a microservice to handle the storage of user data and a microservice to handle the storage of user zip codes for the map service to use. With this architecture, the map service can be scaled to incorporate other types of data and requests without having to worry about the state of the user service.

The app also features a map of New York City, accessible through the user account, which collects and stores the user's zip code from their account upon loading. The map was built using [Mapbox](https://www.mapbox.com/) and [NYC Open Data](https://opendata.cityofnewyork.us/) data sets for Borough Boundaries (the 5 boroughs are bounded by thick black lines), Neighborhood Tabulation Areas (the shaded purple layer with thinner boundaries), and Neighborhood Names (represented by blue dots). 

Currently, three Neighborhood Names are shown with a Mapbox popup and are statically generated for the demonstration of the app. The next step is to make the map interactive and incorporate demographic data (of which NYC Open Data has plenty).

Find the Trello board, with user stories, for this project [here](https://trello.com/b/M2mwUqMR).
Check out the wireframes [here](https://www.figma.com/file/d7xlJuCSMG1HMJfNFTn97ud5/NY-data-API-User-Portal).

Find the deck with the proposal slides [here](https://docs.google.com/presentation/d/1Cr_WrK_7CxnLsQ3-G-PS-p-QDHff0So_nrGjVadWN3s/edit?usp=sharing).
