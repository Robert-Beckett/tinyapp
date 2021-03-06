# TinyApp Project

TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).

## Final Product

<img src="screenshots/homePageNoLogin.png" alt="Home page noLogin" width="200" /> <img src="screenshots/homePageLoggedIn.png" alt="Home page Logged in" width="200" /> <img src="screenshots/editLinkPage.png" alt="Edit Link" width="200" />


## Dependencies

- Node.js
- Express
- EJS
- bcrypt
- body-parser
- cookie-session

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node express_server.js` command.
- Site runs on port 8080 by default.

## Usage

- Register first to create and edit tinyUrls.
- Once signed in Create New URL will ask you to provide a website.
- URL's do not require a protocol, but if one is not provided, it will prefix http.
- The main page will keep track of all links you have created, as well as the date of creation and how many times they have been used.
- The edit function of the name page will provide the same information, albeit for a single URL.  It will let you change where the mini URL leads, but not the URL itself.
- Delete will immediately delete the mini URL with no confirmation prompt.

## Functionality

Basic functionality is shortening and storing of URLs.  The URLs are tied to individual accounts, so anyone can use a redirect link, but only the creators can edit or delete them.  As a result, registration is required to create URLs.

The URLs will keep track of when they were created, and how many times they have been accessed, ticks of which can be viewed on the users index page, or on the edit page of that URL.