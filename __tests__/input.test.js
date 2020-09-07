'use strict';
jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
    return {
        add: 'new note',
    }
});
const Input = require('../lib/input.js');

describe('Input Module', () => {

    it('Valid() method returns true when the user enter action and note ', () => {
        let options = new Input();
        expect(options.valid()).toBeTruthy();
    });

    it('valid() method returns false when the note is empty the value is undefined', () => {
        let options = new Input();
        options.payload = undefined;
        expect(options.valid()).toBeFalsy();
    });


    it('getAdd() method returns true when the action is add or a', () => {
        let options = new Input();
        options.action = /add|a/i;
        expect(options.getAdd()).toBeTruthy();
    });

})
