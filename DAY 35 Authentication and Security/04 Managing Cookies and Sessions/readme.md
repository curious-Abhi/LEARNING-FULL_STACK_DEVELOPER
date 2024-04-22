# Authentication App README

This is an authentication application built using Express.js, PostgreSQL, Passport.js, and bcrypt. It allows users to register, login, and access secret content.

## Features

- **Registration**: Users can register with their email and password. Passwords are hashed before storing them in the database using bcrypt.
  
- **Login**: Registered users can login using their email and password. Passwords are compared with the hashed version stored in the database for authentication.
  
- **Session Management**: Express-session middleware is used for session management. Users remain logged in until they logout or their session expires.

- **Secret Content**: Authenticated users can access secret content. Unauthenticated users are redirected to the login page.

## Dependencies

- `Express.js`: Web application framework for Node.js.
  
- `PostgreSQL`: Database system for storing user data.
  
- `Passport.js`: Authentication middleware for Node.js.
  
- `bcrypt`: Library for hashing passwords.
  
- `express-session`: Session middleware for Express.js.

## How to Use

1. **Registration**: Users can register by providing their email and password on the registration page.
  
2. **Login**: Registered users can login using their email and password on the login page.
  
3. **Access Secret Content**: Authenticated users can access secret content by navigating to the '/secrets' route. If not authenticated, they are redirected to the login page.

4. **Logout**: Users can logout by clicking on the logout button, which clears their session data and redirects them to the home page.

## File Structure

- `server.js`: Entry point of the application containing server setup and routes.

- `public/`: Static assets folder containing CSS, JavaScript, and other client-side resources.

- `views/`: EJS template files for rendering HTML pages.

## Configuration

- **Database Configuration**: Ensure PostgreSQL is installed and running. Update the PostgreSQL configuration in `server.js` to match your database settings.

- **Session Secret**: Set your session secret in the `session` middleware options in `server.js`.

## Development

To run the application locally:

1. Clone the repository.
   
2. Install dependencies using `npm install`.
   
3. Ensure PostgreSQL is running and update the configuration in `server.js`.
   
4. Run the application using `npm start`.
   
5. Access the application in your browser at `http://localhost:3000`.

## Author

- Abhishek Kumar
