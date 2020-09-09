'use strict';
const theNotes = require('./model/notes-schema.js');
// refactoring 

class note {
  constructor() {

  }
  async execute(options) {
    // console.log("hi iam options",options)
    
      if (options && options.action === 'add' || options && options.action === 'a') {
        this.add(options);
        this.save(options);

      }
   
    else if (options && options.action === 'list') {
      // console.log("befor list : ")
      await this.list(options);
      // console.log("after list : ")

    } else if (options && options.action === 'delete') {

      this.delete(options);

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
  async save(options) {
    // console.log(options);
    let record = new theNotes({ text: options.payload, category: options.category });
    // console.log("this is the passed object to db", { text: options.payload, category: options.category })
    // console.log("....options", options)
    let saved = await record.save();
    console.log("note saved ", this.payload)
    console.log("note saved ", saved)
    return saved;
  }
  async list(options) {
    // console.log("here iam options",options)

    if (options.payload === 'Please add a note') {
      let allnotes = await theNotes.find();
      console.log("allnotes : ", allnotes);
      return allnotes;
    } else {
      let oneNote = await theNotes.find({ category: options.payload });//because its stored in the note place when the use hits the command
      console.log("oneNote : ", oneNote);
      return oneNote;
    }

  }
  async delete(options) {
    // console.log("this.payload .....",this.payload)
    // console.log("options.payload .....",options.payload)
    let deletenote = await theNotes.findByIdAndDelete({ "_id": options.payload });
    console.log("deletenote : ", options.payload);
    console.log("deletenote : ", deletenote);
    return deletenote;

  }
}

module.exports = note;

