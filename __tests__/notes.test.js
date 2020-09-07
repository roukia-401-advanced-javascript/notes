'use strict';

const Notes = require('../lib/notes.js');
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
        note.execute({ action: 'add', payload: 'new note' });
        expect(console.log).toHaveBeenCalled();
    });

})
