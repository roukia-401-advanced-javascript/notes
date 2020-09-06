'use strict';

const minimist = require('minimist');

function Input() {

  console.log("process.argv : ", process.argv);

 // i can get the add and note either from the process.argv or after doing the minimist
 // process.argv is an array to get 
 //  1. note >> 
 let payload= process.argv[3];
 // 2. action(add or a) >> let action= process.argv[2]; it will get the arguments with the dash(--add or -a)
 

 // minimist the process.argv to get them in a clear way as pairs key and value, the key is the argument and the value is the thing after it which is the note
 // slice the unneeded data that are in the process.argv
  const args = minimist(process.argv.slice(2));
  console.log(" args minimist >>>>> ", args)

  // to get the add and note after the args minimist 
  // its an object i can get its key and value, the key represnt the the arguments which is add or a without dashes and the value represent the note
  console.log('obj key',Object.keys(args)[1])
  console.log('obj value',Object.values(args)[1])
  let action = Object.keys(args)[1]; // = add or a
  // let payload = Object.values(args)[1]; // = note but if the note is empty it will give true which will print instead of the note >> true so it will be more easy to do it before the minimist


  // Use the args to create our properties with helper methods
  this.action = this.getAdd(action);
  this.payload = this.getNote(payload);
}

Input.prototype.getAdd = function (action) {
    
    let validAction = /add|a/i;
    // testing if the action is equal to the reg which is add or a
    return validAction.test(action) ? action : 'Enter a valid action';
    
};

Input.prototype.getNote = function (payload) {
    // checking if the user add a note or left it empty
    return payload ? payload : 'Please add a note';
  };

module.exports = Input;