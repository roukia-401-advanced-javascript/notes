'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
function AddNote () {

};

AddNote.prototype.execute = function (options) {
  if (options.action ==='add'|| options.action ==='a' ) {
  this.add(options);
  
  }else{
    console.log('Enter a valid action');
  }
};

AddNote.prototype.add = function (data) {
   this.id=Math.floor(Math.random() * 100)+1;
   this.payload=data.payload;
   console.log(`Note: ${this.payload} , id: ${this.id} `)
  };

module.exports = AddNote;

