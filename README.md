<br/>
<p align="center">
<img src="./logo.png" alt="Logo" width="60" height="60">
<h1 align="center">AussieCamp</h1>

<p align="center">
    An Awesome Web Application for Camping Enthusiasts to Share, Edit, and Review Campsites!
    <br/>
    <br/>
    <a href="https://aussiecamp.herokuapp.com/"><strong>Explore the live application »</strong></a>
    <br/>
    <br/>
  </p>
</p>

## About the project
### Main tech stack
Node.js + Express + MongoDB Cloud

## Features
- Manage campground posts with basic functionalities:

    - Create, edit and delete campground and reviews

    - Upload campground photos

    - Display campground location on Mapbox clusteredly/individually.

- Authentication & Authorization 
    - User login with username and password.

    - One cannot manage campground and reviews without being authenticated.

    - One cannot edit or delete campground and reviews created by other users.

- Flash messages responding to users' interaction with the app

- Responsive web design.


## Getting Started
### Prerequisites
- Node.js v16
- A web brower 
- git  

### Installation
#### Clone or download this repository  
`git clone https://github.com/kehuanW/AussieCamp.git`

#### Install dependencies
`npm install`  
or  
`yarn install`

#### Start the application  
`npm start`


## Main Dependencies
- express
    - ^4.18.1
    - Building a fast, unopinionated, minimalist web framework

- mongoose
    - ^6.4.1
    -Managing MONGODB.

- @mapbox/mapbox-sdk
    - ^0.13.4
    - Embedding map in the web
    
- cloudinary
    - ^1.33.0
    - Storing pictures uploaded by users

- ejs 
    - ^3.1.8
    - Using embedded JavaScript templates which retains the syntax of HTML while allowing data interpolation

- ejs-mate
    - ^4.0.0
    - Creating reusable code that will meet our goal to reduce duplicating code

- dotenv
    - ^16.0.1
    - Savig environment variables of the application.



- joi 
    - ^17.6.0
    - Making data validation easy to write and manage.

- method-override
    - ^3.0.0
    - To solve the problem that HTML Forms and our brower can only send GET/POST request, they can't send a PUT/PATCH/DELETE request.

- multer
    - ^1.4.5-lts.1 
    - Handling multipart/form-data, which is primarily used for uploading files. (for cloudinary here)

- multer-storage-cloudinary
    - ^4.0.0
    - A multer storage engine for Cloudinary

- nodemon
    - ^2.0.20
    - Automatically restarting the node application when file changes


- express-mongo-sanitize
    - ^2.2.0
    - Protecting against MONGO injection attacks by searching for any keys in objects that begin with a $ sign or contain a .

- helmet
    - ^5.1.0
    - Securing apps by setting various HTTP headers (Setting Content-Security-Policy)

- express-session
    - ^1.17.3
    - For flash message and authentication

- connect-flash:
    - ^0.1.1 
    - flashing success or failure messages for users.

- connect-mongo 
    - ^3.2.0"
    - Handling mongo conection security

- passport
    - ^0.6.0
    - Passport is middleware for Node.js that makes it easy to implement authentication and authorization. 

- passport-local
    - ^1.0.0
    - Passport strategy for authenticating with a username and password.

- passport-local-mongoose
    - ^7.1.2
    - A Mongoose plugin that simplifies building username and password login with Passport. Used in User schema for mongoose.

- sanitize-html
    - ^2.7.0

## Acknowledgements
Inspired by the Udemy course - https://www.udemy.com/course/the-web-developer-bootcamp/
