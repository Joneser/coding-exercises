'use strict';

/**
 * @desc Standard fizz buzz function
 * @param {number} limit The number fizzbuzz needs to be played until
 * @returns {Array} outputArray The array of outputs decided by fizzbuzz (using an array to store values in order to make testing easier)
 */
var fizzBuzz = function (limit) {

	var outputArray = [];

	for (var i = 0; i < limit; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			outputArray[i] = 'fizzbuzz';
		}
		else if (i % 3 === 0) {
			outputArray[i] = 'fizz';
		}
		else if (i % 5 === 0) {
			outputArray[i] = 'buzz';
		}
		else {
			outputArray[i] = i;
		}
	}

	return outputArray;
};

module.exports = fizzBuzz;
