'use strict';

/**
 * @desc This function takes two strings and checks if they are anagrams of each other
 * @param {string} stringOne the first string to compare
 * @param {string} stringTwo the second string to compare
 * @return {boolean} whether it is true/false that the strings are anagrams of each other
 */

var isAnagram = function (stringOne, stringTwo) {

	// if neither of the arguments are a string, return an error
	if (typeof stringOne !== 'string' || typeof stringTwo !== 'string') {
		throw Error('isAnagram: Both arguments must be strings');
	}

	// if the strings are of a different length then they aren't anagrams
	if (stringOne.length !== stringTwo.length) {
		return false;
	}

	// Step 1. split the strings into individual characters
	// Step 2. sort the strings
	// Stey 3. Join them again
	var stringOneSorted = stringOne.split('').sort().join();
	var stringTwoSorted = stringTwo.split('').sort().join();

	// Now that the strings are sorted, we can now use simple string comparison
	return stringOneSorted === stringTwoSorted;

};

module.exports = isAnagram;
