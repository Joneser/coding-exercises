'use strict';

var isAnagram = require('../solutions/isAnagram.js');

describe('When using isAnagram()', function () {

	it('Check for successful anagram comparisons', function () {
		expect(isAnagram('1234567890', '0987654321')).toEqual(true);
		expect(isAnagram('abcdefg', 'befcgda')).toEqual(true);
		expect(isAnagram('THIS IS a string with SPACES, capitals!?!?!? and special', ' Ih SPAS a striTHISng witCES, ca?!? and specpitals!?!ial')).toEqual(true);
		expect(isAnagram('', '')).toEqual(true);
	});

	it('Check for failed anagram comparisons', function () {
		expect(isAnagram('1234567890', '0987654322')).toEqual(false);
		expect(isAnagram('testing', 'not testing')).toEqual(false);
		expect(isAnagram('                 ', '     ')).toEqual(false);
	});

});
