'use strict';

/**
 * @desc This function returns an array containing all prime numbers up to certain value
 * @param {number} boundingNumber - This is the value that the prime numbers need to be returned to
 * @return {array}      - This is the array of prime numbers
 */

var getPrimes = function (boundingNumber) {

	// if he bounding number isn't correctly defined, return null
	if (!boundingNumber || typeof boundingNumber !== 'number') {
		return null;
	}

	var primes = [];

	// loop to begin check of each number
	for (var i = 2; i < boundingNumber; i++) {
		var isPrime = true;
		for (var j = i - 1; j > 1; j--) {
				if (i % j === 0) {
					isPrime = false;
				}
		}

		if (isPrime) {
			primes.push(i);
		}
	}

	return primes;

};

module.exports = getPrimes;
