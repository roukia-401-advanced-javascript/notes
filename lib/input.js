'use strict';

const minimist = require('minimist');

// refactoring 

class Input {
  constructor() {
    // console.log("process.argv : ", process.argv);
    let payload = process.argv[3]; //note
    const args = minimist(process.argv.slice(2));
    // console.log(" args minimist >>>>> ", args)
    // console.log('obj key', Object.keys(args)[1])
    // console.log('obj value', Object.values(args)[1])
    let action = Object.keys(args)[1]; //add
    // console.log("category : ", process.argv[5]);
    let category = process.argv[5]; //category
    this.action = this.getAdd(action);
    this.payload = this.getNote(payload);
    this.category = this.getCategory(category);

  }

  getAdd(action) {
   
      let validAction = /add|a|list|delete/i;
      return validAction.test(action) ? action : 'Enter a valid action here';
    
    
  }

  getNote(payload) {
    return payload ? payload : 'Please add a note';
  }
  getCategory(category){
    return category ? category : 'Please add a category';
  }
  valid() {
    console.log("this.action : ", this.action);
    console.log(" this.payload : ", this.payload)
    return this.action && this.payload;
  }
}

module.exports = Input;