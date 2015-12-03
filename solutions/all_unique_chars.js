'use strict';

/*
* @description This functions takes a string and determines if it contains all uniqeue characters
* @param {string} The string to check;
* @return {boolean} Returns a true/false indicating if the string contains all unique characters
*/
var checkForUnique = function (stringValue) {

	if (typeof stringValue !== 'string') {
		throw Error('the value entered is not a string');
	}

	var charMap = {};

	for (var i = 0; i < stringValue.length; i++) {
		if (charMap[stringValue[i]]) {
			// If the string key has already been created, then this is the second time it has been found, return false!
			return false;
		}

		// initialise the key in the map
		charMap[stringValue[i]] = 1;

	}
	// if it exits the for-loop successfully, all characters are unique, return true!
	return true;
};

module.exports = checkForUnique;
