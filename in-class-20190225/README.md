# Assignment In-Class: 20190225

## React JSX Practice and Event Handling - Using Create-React-App

### Step One: Create a new simple react application using create react app

* Check that you have node and npm installed
* Create a new directory to place today's work
* run: npx create-react-app in-class-20190225
* **Import other items**
    * cd pizza-bandit
    * npm install --save bootstrap
    * npm install --save jquery
    * npm install --save popper.js
    * npm install --save mapbox-gl
    * npm install --save react-mapbox-gl
* Modify the index.js and App.js files to create referecnces

### Step Two: Create a new Github Repository and use Git to create a local repository that syncs with your Github repository

* git init - THIS IS ONLY DONE ONCE PER REPOSITORY - YOU NEVER RUN THIS AGAIN
* git add -A - adds the files in this directory 
* git commit -m "a useful message describing this update here" - you do this every time you create a new update
* Create a github repository
* copy the git remote command there
* git push -u origin master - Push to the github repository

### Step Three: Create a simple Component-based form using JSX

* Create a ReactJS Component to handle input for an email
* Create a ReactJS Component to  input for a password
* Create a ReactJS Component to serve as a parent to all form elements
* Create a button for submission in the form Componet
* Create an App Component to serve as the parent for all children components

### Step Four: Introduce a event handler methods

* **Create an event handlers for:**
    * The email input
    * The password input
    * The button
* **Validate form input**
    * ensure the email is correct
    * check to see that the password is 8 characters or more and has at least 1 number and one capitalized letter
* Show form input in a separate div:
    * show the results from the form as JSX output in a separate DIV

### Step Five: Create a Simple React-Mapbox component

* Create a Map element with appropriate Layer and Feature children
* Obtain position using Geolocation
* Update map in the ReactJS componentDidMount lifecycle method