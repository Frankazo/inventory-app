INVENTORY APP InvApp
--------------------
### Front End [Client](https://frankazo.github.io/inventory-app/)

### Front End [Repo](https://github.com/Frankazo/inventory-app)

### Back End [API](https://project2-sei09.herokuapp.com/)

### Back End [Repo](https://github.com/Frankazo/project2-api)

CONTENTS OF THIS FILE
---------------------

   * Introduction
   * Entity Relationship Diagram
   * Wireframes
   * User Stories
   * Planning and Development
   * Future features
   * Technologies
   * Creator

INTRODUCTION
------------

  This is the Second project for Software engineering Immersive SEI09.

  Inventory App that allows you to create and edit Inventories, using resources in a database.

ENTITY RELATIONSHIP DIAGRAM
---------------------------

![EDR](https://i.imgur.com/yJAucB9.png)

WIREFRAMES
----------
Initial Stage

<img src="https://i.imgur.com/pIvQyGz.jpg" width="250">

Sign In or Sign Up Stage

<img src="https://i.imgur.com/x4UaPay.jpg" width="250">

Placeholder

<img src="https://i.imgur.com/xgRVduj.jpg" width="250">


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

    Setting up for the API and the client.
    [Api](https://project2-sei09.herokuapp.com/)
    Deployed using Heroku
    [Client](https://frankazo.github.io/inventory-app/)
    Deployed on Github Pages

  ### API
    While Plannig for the Inventory App I decided to use Two Main resources
    Therefore I Scaffold the resources Inventories and Items
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
  - Sharing functionalities.
  - Multiple user collaboration.
  - Statistics.

  TECHNOLOGIES
  ------------
  - API using Ruby on Rails and Postgresql.
  - Javascript to communicate with API.
  - jQuery for DOM manipulation and event handling.
  - Handlebars for view rendering.
  - HTML and CSS.
  - Bootstrap for additional Styling.

  CREATOR
  -------
  - [Frank Luis-Ravelo](https://www.linkedin.com/in/franklr/)
