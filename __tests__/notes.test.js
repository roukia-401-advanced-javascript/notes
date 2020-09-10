'use strict';
const supergoose = require('@code-fellows/supergoose');
const Notes = require('../lib/notes.js');
const notesSchema = require('../lib/model/notes-collection.js')
// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('Notes Module', () => {
    // test case
    it('execute() doent log out when no given options', () => {
        const note = new Notes();
        note.execute();
        expect(console.log).not.toHaveBeenCalled();
    });

    it('execute() logs out when given options', () => {
        const note = new Notes();
        note.execute({ action: 'add', payload: 'new note1', category: 'home' });
        expect(console.log).toHaveBeenCalled();
    });

})

describe('Notes collection Module', () => {
    it('can create a new note and save it to db', async () => {
        let obj = { action: 'add', payload: 'new note1', category: 'school' };
        let savedNotes = await notesSchema.save(obj);
        console.log("hey iam the saved note :", savedNotes)
        expect(obj.payload).toEqual(savedNotes.text)
        expect(obj.category).toEqual(savedNotes.category)
    });


    it('can list notes with the same category', async () => {
        let obj1 = { action: 'add', payload: 'new note1', category: 'school' }
        let obj2 = { action: 'list', payload: 'school' };
        let savedNote = await notesSchema.save(obj1);
        console.log("hey iam the saved note :", savedNote);
        let listedNote = await notesSchema.list(obj2); // loop over them
        console.log("hey iam the listednote", listedNote)
        listedNote.forEach(e => {
            expect(savedNote.category).toEqual(e.category)
        })
    })

    it('can delete notes by the id', async () => {
        let obj1 = { action: 'add', payload: 'new note4', category: 'school' };
        let savedNote = await notesSchema.save(obj1);
        let obj2 = { action: 'delete', payload: savedNote._id }
        let deletedNote = await notesSchema.delete(obj2);
        console.log("hey i am the deletedNote", deletedNote)
        let obj3 = { action: 'list', payload: 'Please add a note' }
        let allListedNotes = await notesSchema.list(obj3);
        allListedNotes.forEach(e => {
            expect(e._id).not.toEqual(deletedNote._id);
        })
    })

    it('can update notes by the id', async () => {
        let obj1 = { action: 'add', payload: 'new note5', category: 'school' };
        let savedNote = await notesSchema.save(obj1);
        let obj2 = { action: 'update', payload: savedNote._id }
        let updatedNote = await notesSchema.update(obj2);
        console.log("hey i am the updatedNote", updatedNote)
        let obj3 = { action: 'list', payload: 'Please add a note' } // so it will list all the notes so i can compare
        let allListedNotes = await notesSchema.list(obj3);
        allListedNotes.forEach(e => {
            console.log("this is the all lists of notes :",e)
            expect(allListedNotes[allListedNotes.length-1].text).toEqual(updatedNote.text);
        })
    })
    
});
