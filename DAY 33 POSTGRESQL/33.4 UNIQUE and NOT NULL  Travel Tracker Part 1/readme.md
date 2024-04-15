# Visited Countries Tracker

## Introduction
Visited Countries Tracker is a web application built with Node.js, Express.js, and PostgreSQL that allows users to keep track of the countries they have visited. Users can add countries to their visited list, and the application provides real-time statistics on the total number of visited countries.

## Features
- Add countries to your visited list
- Real-time statistics on the total number of visited countries
- Error handling for invalid country names or duplicate entries

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- EJS (Embedded JavaScript) for templating
- Body-parser for parsing incoming request bodies

## Getting Started
To run the Visited Countries Tracker locally, follow these steps:

1. Clone the repository:
git clone url


2. Navigate to the project directory:

cd visited-countries-tracker


3. Install dependencies:
npm install


4. Set up the PostgreSQL database:
- Create a new PostgreSQL database named `world`.
- Execute the SQL script `schema.sql` located in the `database` directory to create the necessary tables.

5. Configure the database connection:
- Open the `app.js` file.
- Update the PostgreSQL connection details (user, host, database name, password, port) in the `db` constant.

6. Start the server:
npm start

7. Access the application in your web browser:
http://localhost:3000


## Usage
- Visit the homepage to view the list of visited countries and real-time statistics.
- Use the input field to add new countries to your visited list.
- Error messages will be displayed if the entered country name is invalid or if it has already been added.

## Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.


