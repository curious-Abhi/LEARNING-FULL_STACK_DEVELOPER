# Express Authentication System

This is a simple authentication system built with Express.js and PostgreSQL. It allows users to register with an email and password, and then log in to access "secret" content.

## Features

- User registration with email and password
- User login with email and password
- Password hashing for security
- Error handling for duplicate email during registration and incorrect password during login


## Usage

1. Register a new user:
   - Navigate to `/register` route.
   - Enter your email and password.
   - Click the "Register" button.

2. Log in:
   - Navigate to `/login` route.
   - Enter your registered email and password.
   - Click the "Log In" button.

3. Access secret content:
   - Upon successful login, you will be redirected to the `/secrets` route where you can access secret content.

