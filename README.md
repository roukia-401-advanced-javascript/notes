# Notesy

## Author: Roukia Salahi

- [tests report](https://github.com/roukia-401-advanced-javascript/notes/actions)

## Setup

- ***HTTPIE***

  httpie is a command line http client, which will allow us to check websites and APIs directly from the terminal

   - Install httpie, by running this command in your terminal:
`brew install httpie`
   - Confirm proper installation
`http --version`
   *You should see a version number, such as: 2.1.0*
  - Confirm proper operation
  - Type this command in your terminal
`http https://pokeapi.co/api/v2/pokemon`
  *You should see a JSON object representing a list of Pokemon Characters*
  
 - ***Cloud Service Providers***
 
 1- Netlify
   - Create an account at netlify.com
   - Simply “Login with GitHub” and your account will be created and connected to GitHub
   - Install the CLI tools, by running this command in your terminal:
       `npm install -g netlify-cli`
   - Confirm proper installation
       `netlify --version`
*You should see a version number, such as netlify-cli/2.53.0 linux-x64 node-v12.18.0*

 2- Microsoft Azure
 
  - Install the Azure CLI tools, by running this command in your terminal:
      `brew install azure-cli`
  - Confirm proper installation
      `az --version`

3- Amazon AWS

  - Install the AWS CLI tools, by running this command in your terminal:
      `brew install awscli`
  - Confirm proper installation
      `aws --version`
  - You should see output with these versions or higher:
      `aws-cli/2.0.19 Python/3.8.3 Linux/4.19.104-microsoft-standard botocore/2.0.0dev23`
  
 - ***Mongo database***
 
  MongoDB is a NoSQL Database (Document Store) server
  
  *Linux and Windows Users*
  
   - Run these commands, in order, to install MongoDB. Note that for this installation
    
    `wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -`
    `sudo apt-get install gnupg`
    `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list`
    `sudo apt-get update`
    `sudo apt-get install -y mongodb-org`
    
   - After installation completes, we’ll need to setup MongoDB as a “service” so that it can easily be restarted. Enter the following commands, in order, to set this up:
    
    `sudo curl -s https://raw.githubusercontent.com/mongodb/mongo/master/debian/init.d -o /etc/init.d/mongod`
    `sudo chmod 755 /etc/init.d/mongod`
    `sudo service mongod start`
    
   - Now, let’s make sure we can connect to the MongoDB server. Run this command:
    
    `mongo`
    
   - Type exit to return to your bash shell. MongoDB is successfully installed.
    
   ## Installation

 - `npm init -y`
  - dependencies :
  
    - `npm install minimist`
    - `npm install mongoose`
    
  - devDependencies :
  
  *install the jest to do the test and modify the script in the pacjage.json file to be "scripts": {
    "test": "jest --verbose --coverage"
  },*
  
    - `npm install jest`
    
   *install supergoose to save the data of the tests in this its memory and save the supergoose directly to the devDependencies not to the dependencies*
   
    - `npm install --save-dev @code-fellows/supergoose`



## Running the app 

- start the server
     - sudo service mongod start
- node index.js
- to add a note and save it to the DB:
  - node index.js --add 'This is fun' –category school
  - node index.js -a 'This is fun' –category school
- to list all your notes:
  - node index.js --list
- to list your note by specific category:
  - node index.js --list school
- to delete your note by its id :
  - node index.js --delete 5f57996d8d0dbf73f9e65322 //id no
- to update your note by its id :
  - node index.js --update 5f57a59df660787426d1c551 //id no


## Start the test

- npm test

## UML
![UML](/assets/uml.jpg)


