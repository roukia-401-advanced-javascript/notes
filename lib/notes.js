'use strict';

// refactoring 

class note {
  constructor() {

  }
  execute(options) {
    if (options&& options.action === 'add' ||options&& options.action === 'a') {
      this.add(options);

    } else if (options) {
      console.log('Enter a valid action');
    }
  }
  add(data) {
    this.id = Math.floor(Math.random() * 100) + 1;
    this.payload = data.payload;
    console.log(`Note: ${this.payload} , id: ${this.id} `)
  }
}

module.exports = note;

