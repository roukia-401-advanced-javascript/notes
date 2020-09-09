"use strict";


const notesSchema = require('./notes-schema.js');

class myNotes {
    constructor() {

    }
    async save(options) { //like creating in the db then saving
        // console.log(options);
        let record = new notesSchema({ text: options.payload, category: options.category });
        // console.log("this is the passed object to db", { text: options.payload, category: options.category })
        // console.log("....options", options)
        let saved = await record.save(); //this save is the method for the schema 
        console.log("note saved ", options.payload) //console the note its self
        console.log("note saved ", saved) //console the whole saved object
        return saved;
    }

    async list(options) { //get
        // console.log("here iam options",options)

        if (options.payload === 'Please add a note') {
            let allnotes = await notesSchema.find();
            console.log("allnotes : ", allnotes);
            return allnotes;
        } else {
            let oneNote = await notesSchema.find({ category: options.payload });//because its stored in the note place when the user hits the command
            console.log("oneNote : ", oneNote);
            return oneNote;
        }

    }

    async delete(options) {
        // console.log("this.payload .....",this.payload)
        // console.log("optionnnnns",options)
        // console.log("options.payload .....",options.payload)
        let deletenote = await notesSchema.findByIdAndDelete({ "_id": options.payload });
        console.log("deleted Note ID : ", options.payload);
        console.log("deleted Note : ", deletenote);
        return deletenote;

    }


    async update(options) {
        // return schema.findByIdAndUpdate("_id", record, {new: true});
        let updatenote = await notesSchema.findOneAndUpdate({ "_id": options.payload }, { text: 'updating note' }, { new: true }); // the first object is the find and the sec is the modification
        // if we didnt add the new method it will update it but will return the old one 
        console.log("updated Note ID : ", options.payload);
        console.log("updated Note : ", updatenote);
        return updatenote;
    }

}
// Singleton
// exports an instance instead of the class, 
// this instance will be shared]
module.exports = new myNotes();