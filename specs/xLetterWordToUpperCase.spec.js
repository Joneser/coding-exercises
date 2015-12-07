'use strict';

var convertToUpper = require('../solutions/xLetterWordToUpperCase.js');

describe('When using convertToUpper() on a string', function () {

	it('Check positive results', function () {
		expect(convertToUpper('abcdefg', 7)).toEqual('ABCDEFG');
		expect(convertToUpper('I think this is it', 4)).toEqual('I think THIS is it');
		expect(convertToUpper('What about this one', 5)).toEqual('What ABOUT this one');
		expect(convertToUpper('Not passing a word length argument', 5)).toEqual('Not passing a word length argument');
		expect(convertToUpper('This is going to be the last positive test in this file', 4)).toEqual('THIS is going to be the LAST positive TEST in THIS FILE');
	});

	it('check for negative results', function () {
		expect(convertToUpper(56, 5)).toEqual(null);
		expect(convertToUpper(true, false)).toEqual(null);
		expect(convertToUpper(false, true)).toEqual(null);
		expect(convertToUpper(true, 'bla')).toEqual(null);
	});

});
