Inventory App
-------------
CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Wireframes
 * User Stories
 * Planning and Development
 * Future features
 * Technologies
 * Creator

 INTRODUCTION
 ------------

  This is the Second project for Software engineering Immersive SEI09.


  ERD
  ---

![EDR](https://i.imgur.com/yJAucB9.png)

  WIREFRAMES
  ----------
  Initial Stage
  - ![alt text](https://i.imgur.com/pIvQyGz.jpg)

  - Sign In or Sign Up Stage
  - ![alt text](https://i.imgur.com/x4UaPay.jpg)

  - Placeholder
  - ![alt text](https://i.imgur.com/xgRVduj.jpg)


  USER STORIES
  ------------

    - As a user I want to sign in/up, change pass and log out.
    - As a user I want to Create a new Inventory.
    - As a user I want to Read multiple Items within an Inventory
    - As a user I want to Read a single item
    - As a user I want to Update an Inventory or item I own
    - As a user I want to Delete an Inventory or item I own

  PLANING AND DEVELOPMENT
  -----------------------
### Set Up

  - First the Set up for the API and the client

  [Api](https://project2-sei09.herokuapp.com/)
  Deployed using Heroku
  [Client](https://frankazo.github.io/inventory-app/)
  Deployed on Github Pages

### API
  While Plannig for the Inventory App I decided to use Two Main resources
  Therefore I Scaffold Two resources Inventory and Item
  Tested all resources end points with curl scripts
  Updated resource controller to inherit from Protected
  Tested resources end points with curl scripts
  Added the relationship to User
  Added User ownership to resource controller

### Client
  Develop functionality to Sign Up, Sign In, Change Password, Sign Out.
  Added success or failure messages.
  Added Crud request to Create, Show, Delete and Update resources.

### Final Touches
  README
  Troubleshoot/Debug
  Style

  FUTURE FEATURES
  ---------------


  TECHNOLOGIES
  ------------
  - API using Ruby on Rails and Postgresql.
  - Javascript to communicate with API.
  - jQuery for DOM manipulation and event handling.
  - Handlebars for view rendering.
  - HTML and CSS.
  - Bootstrap for addional Styling.

  CREATOR
  -------
  - [Frank Luis-Ravelo](https://www.linkedin.com/in/franklr/)
