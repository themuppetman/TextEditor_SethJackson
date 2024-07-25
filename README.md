# Seth Jackson's Text Editor

## Table of Contents
  - [Description](#description)
  - [User Story](#usage)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usge](#usage)

  
## Description
This application uses an IndexedDB to enable's the build to be deployed using Render, that enables the user to download a text editor without a web connection.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Installation 
- In the terminal, run -  npm run start or npm run build
- Connect the repository to Render and deploy
- Download and enjoy the text editor

## Usage
  NodeJS - JSON - Express.js - WebPack - Render 


© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
