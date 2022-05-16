# cv-generator

The CV Generator aims at creating and rendering CVs from information given by the user. 
It fills a template with the stored data and outputs a filled CV, that can be modified.
It is composed of two modules : the back-end server, which uses Node.js + Express and is responsible for the REST APIs and handling all data, and the front-end side, which is a Vuetify client with axios.

## Requirements

We recommend you have the latest LTS version of Node installed:  
https://nodejs.org/en/

## Install and Run

The needed packages need to be installed from inside each module.  
Please un the back-end server first, then the front-end client.

### Back-end server

To install, run the following on your command line interface:

```
cd backend
npm install
```  
Check the relative README for more info.
Start it with:  
```
node server.js
```
### Front-end client

To install, run the following on your command line interface:

```
cd frontend
npm install
```  
Check the relative README for more info.
Start it with:  
```
npm run dev
```