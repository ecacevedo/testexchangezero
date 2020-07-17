# Exchange Zero 



- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

Exchange Zero is a full stack app which for users to trade and give away unwanted items with the goal of reducing waste and consumption. The base functionality is simply to add and delete items from a common "Marketplace". Post MVP features include messaging and blogging.


<br>

## Checklist (put in first person)

###### Server (Back End)
- [x] Have a RESTful JSON API.
- [x] Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- [x] Build a database with at least 3 tables:
- [x] There must be at least 1 association between your tables. (1:m or m:m)
- [x] Utilize Rails to define models for interacting with the database.
- [x] Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables
 

###### Client (Front End)
- [ ] Have a working, interactive React app, built using npx create-react-app.
- [ ] Have at least 8 separate, rendered components in an organized and understandable React file structure.
- [x] Utilize functional and class React components appropriately.
- [x] Utilize state and props in your components efficiently.
- [x] Use only React for DOM Manipulation.
- [ ] Consume data from your Ruby on Rails API, and render that data in your components.
- [ ] Utilize React Router, for client-side routing.
- [ ] Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.


###### Styling
- [ ] Be styled with CSS 
- [ ] Use Flexbox 
- [ ] Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

###### Linting
- [ ] Indent properly.
- [ ] tilize high-quality, semantic variable names.
- [ ] Follow camelCase, snake_case, and kebab-case convention.
- [ ] Remove unnecessary boilerplate React files and code.
- [ ] Remove all console.log()s and commented out code (functional notes and comments are okay).

###### Deployment
- [ ] Deploy the fully functional front-end via Surge or Netlify.
- [ ] Deploy the back-end via Heroku.

###### Procedural
- [ ] Initialize a git repo on Github, with a link to your hosted project.
- [ ] Have frequent commits, making a robust commit history at least every day. (75 commits minimum)
- [ ] Use effective and safe branching and merging processes.

<br>

### MVP

- [x]User can sign in
- [x]User can create account
- [ ]User can create/edit/delete Items
- [ ]User can view marketplace


<br>

### Goals

Have a working app with all MVP requirements.

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front End |
|   React Router   | For routes|
| Axios| For API calls|
|     Ruby on Rails      | For Backend|

<br>

### Client (Front End)

#### Wireframes

https://whimsical.com/RzcHP8eKTseHtNBgqHHRE3


#### Component Tree

https://app.diagrams.net/#G1c-0pVtJ29pITZS3tV7P-f7HPN3PruQPA



#### Component Hierarchy


``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Signup.jsx
      |__ Listings.jsx
|__ services/
      |__ apiconfig.jsx
      |__ apihelper.jsx
      

```

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
| Footer  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Signup    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Listings | functional |   n   |   y   | _The cards will render the post info via props._                 |


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Make Readme with Wireframes & ERD  |    L     |     3 hrs      |     0 hrs     |    0 hrs   |
| Ruby on Rails Models  |    L     |     3 hrs      |     0 hrs     |    0 hrs   |
| Ruby on Auth |    L     |     3 hrs      |     0 hrs     |    0 hrs|
| Ruby on Rails Controllers |    L     |     3 hrs      |    0 hrs     |    0 hrs   |
| Troubleshooting Ruby on Rails Backend |    L     |     3 hrs      |     0 hrs    |    0 hrs   |
| Create CRUD Actions |    H     |     3 hrs      |     0 hrs     |     0 hrs    |
| Create React Components|    H     |     6 hrs      |    0 hrs    |     0 hrs    |
| Style with Flexbox / make responsive |     H     |     6 hrs    |     0 hrs     |     0 hrs     |
| Services / Api Calls|    H     |     3 hrs      |     0 hrs   |     0 hrs     |
| General Troubleshooting |    H     |     10 hrs      |     0 hrs    |     0 hrs    |
| TOTAL               |          |     43 hrs      |     0 hrs    |     0 hrs   |



<br>

### Server (Back End)

#### ERD Model



https://app.diagrams.net/#G14Wgm3RFggvZ-wyzG8_NlKqJCmuboDPTb

<br>

***

## Post-MVP

- [ ] User can click Item in Marketplace and go to seperate page
- [ ] Allow messaging between users
- [ ] Implement Authorization
- [ ] Use Material UI
- [ ] Allow users to create more advanced profile
- [ ] Add blogging
- [ ] Add Resources for zero waste ideas
- [ ] Dark Mode
- [ ] Add Categories to ERD



***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.