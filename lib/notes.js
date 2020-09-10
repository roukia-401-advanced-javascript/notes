'use strict';


const theNotes = require('./model/notes-collection.js');
// refactoring 

class note {
  constructor() {

  }
  async execute(options) {
    // console.log("hi iam options",options)

    if (options && options.action === 'add' || options && options.action === 'a') {
      this.add(options); //in the same file just console the result of the user command if its right
      theNotes.save(options); //calling from collection notes file

    }

    else if (options && options.action === 'list') {
      // console.log("befor list : ")
      await theNotes.list(options);
      // console.log("after list : ")

    } else if (options && options.action === 'delete') {

      theNotes.delete(options);

    } else if (options && options.action === 'update') {

      theNotes.update(options);

    } else if (options) {
      console.log('Enter a valid action or add a note');
    }
  }
  add(data) {
    this.id = Math.floor(Math.random() * 100) + 1;
    this.payload = data.payload;
    this.category = data.category;
    console.log(`Note: ${this.payload} ,  category: ${this.category}, id: ${this.id} `)
  }

}

module.exports = note;

