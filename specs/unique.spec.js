'use strict';

var checkForUnique = require('../solutions/all_unique_chars.js');

describe('When using checkForUnique() on a string', function() {

	it('Check positive results', function() {
		expect(checkForUnique('abcdefg')).toEqual(true);
		expect(checkForUnique('AI649^)')).toEqual(true);
		expect(checkForUnique('Testing')).toEqual(true);
		expect(checkForUnique('1234567890LiIl')).toEqual(true);
	});

	it('check for negative results', function () {
		expect(checkForUnique('1234567890LiIl1')).toEqual(false);
		expect(checkForUnique('testing')).toEqual(false);
		expect(checkForUnique('                 ')).toEqual(false);
		expect(checkForUnique('Here is a simple pretty long string that is definitely not all unique')).toEqual(false);
	});

});