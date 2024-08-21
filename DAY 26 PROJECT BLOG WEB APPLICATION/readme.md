# Blog Project

![EJS](https://img.shields.io/badge/EJS-000000?style=for-the-badge&logo=EJS&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Overview

This is a simple blog project built using **EJS** templating engine, **Node.js**, **Express.js**, and **CSS**. The project allows users to view blog posts, leave comments (if authenticated), and includes basic authentication features like login and logout.

## Features

- **Home Page**: Displays a list of blog posts.
- **Blog Post Details**: Users can view details of each blog post.
- **Comments**: Authenticated users can leave comments on blog posts.
- **Authentication**: Basic login and logout functionality.
- **Error Handling**: Custom 404 error page for non-existing routes.


## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/curious-Abhi/LEARNING-FULL_STACK_DEVELOPER.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd LEARNING-FULL_STACK_DEVELOPER/DAY 26 PROJECT BLOG WEB APPLICATION
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Run the server**:
    ```bash
    npm start
    ```
    The server will start at `http://localhost:3000`.


## Project Structure

```plaintext
blog-project/
│
├── public/               # Static files (CSS, images, etc.)
│   └── styles/
│       └── style.css     # Main stylesheet
│
├── views/                # EJS templates
│   ├── pages/
│   │   ├── home.ejs      # Home page template
│   │   ├── post1.ejs     # Blog post template (for post with id 1)
│   │   ├── post2.ejs     # Blog post template (for post with id 2)
│   │   ├── login.ejs     # Login page template
│   │   └── 404.ejs       # 404 error page template
│   ├── partials/
│   │   ├── header.ejs    # Header partial template
│   │   └── footer.ejs    # Footer partial template
│
├── app.js                # Main application file
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
