'use strict';

const minimist = require('minimist');

// refactoring 

class Input {
  constructor() {
    console.log("process.argv : ", process.argv);
    let payload = process.argv[3];
    const args = minimist(process.argv.slice(2));
    console.log(" args minimist >>>>> ", args)
    console.log('obj key', Object.keys(args)[1])
    console.log('obj value', Object.values(args)[1])
    let action = Object.keys(args)[1];
    this.action = this.getAdd(action);
    this.payload = this.getNote(payload);

  }

  getAdd(action) {
    let validAction = /add|a/i;

    return validAction.test(action) ? action : 'Enter a valid action';
  }

  getNote(payload) {
    return payload ? payload : 'Please add a note';
  }
}

module.exports = Input;