# Express Authentication System


This is a secure authentication system built with Express.js and PostgreSQL, utilizing bcrypt for password hashing.

## Features

- User registration with email and password
- Secure password hashing for enhanced security
- Login functionality with error handling
- Redirection to secret content upon successful login

## Getting Started

To get started with this authentication system, follow these steps:

1. **Install Dependencies**: 
   - Ensure you have Node.js and npm installed on your system.
   - Install dependencies by running `npm install`.

2. **Set Up PostgreSQL Database**: 
   - Create a PostgreSQL database named `secrets`.
   - Update the PostgreSQL connection details in `app.js` if needed (`user`, `host`, `password`, `port`).

3. **Start the Server**:
   - Run the server using `npm start`.
   - Access the application in your web browser at `http://localhost:3000`.

## Usage

1. **Register a New User**:
   - Navigate to `/register` route.
   - Enter your email and password.
   - Click the "Register" button.

2. **Login**:
   - Navigate to `/login` route.
   - Enter your registered email and password.
   - Click the "Log In" button.

3. **Access Secret Content**:
   - Upon successful login, you will be redirected to the `/secrets` route where you can access secret content.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

