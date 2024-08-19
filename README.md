Product Management App

A simple product management application built with React, Redux, and json-server. This app allows users to view, add, update, and remove products. The data is served using a mock REST API with json-server.

Table of Contents

1. Prerequisites
2. Setup
3. Running the Application
4. Project Structure
5. License

6. Prerequisites

Ensure you have the following software installed:

- Node.js (v14 or later)
- npm (comes with Node.js) or Yarn

2. Setup

Follow these steps to set up your development environment:

a. Clone the Repository

First, clone the repository to your local machine:

git clone https://github.com/your-username/product-management-app.git

Navigate into the project directory:

cd product-management-app

b. Install Project Dependencies

Install the necessary dependencies for the React application:

npm install

or if you are using Yarn:

yarn install

c. Install json-server

json-server is used to provide a mock REST API. Install it globally if you haven’t already:

npm install -g json-server

or

yarn global add json-server

d. Prepare the Mock Database

Create a file named db.json in the root directory of the project if it does not exist. Add the following JSON data to it:

{
"products": [
{
"id": 1,
"name": "Product 1",
"price": "10.00",
"imgSrc": "https://via.placeholder.com/150"
},
{
"id": 2,
"name": "Product 2",
"price": "20.00",
"imgSrc": "https://via.placeholder.com/150"
},
{
"id": 3,
"name": "Product 3",
"price": "30.00",
"imgSrc": "https://via.placeholder.com/150"
}
]
}

3. Running the Application

Follow these steps to run both the mock API server and the React application:

a. Start the Mock API Server

Open a terminal and navigate to your project directory. Start the json-server to serve your mock API:

json-server --watch db.json --port 5000

You should see output similar to this:

\{^\_^}/ hi!

Resources
http://localhost:5000/products

Home
http://localhost:3000

b. Start the React Application

In a separate terminal, navigate to the project directory and start the React development server:

npm start

or

yarn start

This will open the application in your default web browser at http://localhost:3000.

4. Project Structure

Here is an overview of the project structure:

- public/ - Contains the public assets and the index.html file.
- src/ - Contains the source code for the React application.
  - components/ - Contains React components.
  - redux/ - Contains Redux setup (actions, reducers, store).
  - App.js - Main application component.
  - index.js - Entry point of the React application.
- db.json - Mock database used by json-server.
