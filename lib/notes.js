'use strict';

// refactoring 

class AddNote {
  constructor() {

  }
  execute(options) {
    if (options.action === 'add' || options.action === 'a') {
      this.add(options);

    } else {
      console.log('Enter a valid action');
    }
  }
  add(data) {
    this.id = Math.floor(Math.random() * 100) + 1;
    this.payload = data.payload;
    console.log(`Note: ${this.payload} , id: ${this.id} `)
  }
}

module.exports = AddNote;

