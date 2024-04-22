# Express Authentication with Passport.js

This is a simple Express.js application demonstrating user authentication and sessions using Passport.js with a local strategy and PostgreSQL as the database.

## Overview

This application allows users to register, login, and access restricted content. It utilizes Passport.js for authentication, bcrypt for password hashing, and PostgreSQL for data storage.

## Files

- `app.js`: Main application file containing route definitions and configuration.
- `public/`: Directory for static files (CSS, client-side scripts).
- `views/`: Directory for EJS templates.
- `src/`: Directory for server-side JavaScript files.

## Dependencies

- Express.js: Web application framework for Node.js.
- Passport.js: Authentication middleware for Node.js.
- Bcrypt: Library for hashing passwords.
- PostgreSQL: Database for storing user data.

## Usage

```bash
# Install dependencies
npm install

# Set up environment variables
echo "SESSION_SECRET=your_session_secret" > .env
echo "PG_USER=your_postgresql_username" >> .env
echo "PG_HOST=your_postgresql_host" >> .env
echo "PG_DATABASE=your_postgresql_database" >> .env
echo "PG_PASSWORD=your_postgresql_password" >> .env
echo "PG_PORT=your_postgresql_port" >> .env

# Start the server
npm start
