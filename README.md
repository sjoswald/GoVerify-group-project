# GoVerify Unique Personal Identification System

Group 4 Made Tech software engineering academy project.

In order to successfully build the file system a number of modules will be needed.

## Setting up the packages
 - npm init
 - npm install govuk-frontend --save
 - npm install express --save 
 - npm install cypress --save-dev
 - npm install nodemon --save-dev
 - npm install nunjucks
 - npm install sass
 - npm i express sass
 - npm install start-server-and-test --save-dev

 ## Add to scrips in package.json
 ```
    "dev": "nodemon . & npm run scss",
    "scss": "sass --watch src/scss/main.scss public/styles/main.css",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "server": "node src/server.js",
    "e2e": "start-server-and-test server http://localhost:3000 cypress:run"
```

## Other useful info
 - All of the folders found in public/assets can be copied from node_modules/govuk-frontend/govuk/assets
 - The govuk.js file in public is a renamed copy of node_modules/govuk-frontend/govuk/all.js
 - For cypress tests you run you need to have started your server - this is what start-server-and-test is letting us achieve
 - when copying the default page html template you need to change the href on line 20 from <link href="/govuk-frontend/govuk/all.css" rel="stylesheet"> to <link href="/styles/main.css" rel="stylesheet">
 -  also change line 90 to <script src="./govuk.js"></script>

## Styling and component source:
 - https://design-system.service.gov.uk/styles/page-template/
 - https://design-system.service.gov.uk/components/


