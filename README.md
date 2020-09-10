# notes

commands:

- to add a note and save it to the DB:
  - node index.js --add 'This is fun' –category school
  - node index.js -a 'This is fun' –category school
- to list all your notes:
  - node index.js --list
- to list your note by specific category:
  - node index.js --list school
- to delete your note by its id :
  - node index.js --delete 5f57996d8d0dbf73f9e65322 //id
- to update your note by its id :
  - node index.js --update  5f57a59df660787426d1c551 //id

- to start the test
  - npm test


- installations:
 - install the mongo locally from the offical website
 - start the server
     - sudo service mongod start

  - npm init -y
  - dependencies :
    - npm install express
    - npm install minimist
    - npm install mongoose
  - devDependencies :
  install the jest to do the test and modify the script the pacjage.json file to be "scripts": {
    "test": "jest --verbose --coverage"
  },
    - npm install jest
    ***to install supergoose and save it directly to the devdependancies not to the depndancies*** 
    - npm install --save-dev @code-fellows/supergoose

