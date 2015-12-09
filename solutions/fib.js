'use strict';

/**
 * @desc This function generates a fibonnaci sequence up to a certain number
 * @param {number} seqLength - This represents how long the sequence should be
 * @return {array}     - Returns an array containing the fibonnaci sequence
 */
var fib = function (seqLength) {

	var sequence = [];
	// initialise the first two entries in order to make sure we have two entries to add in the loop
	sequence[0] = 0;
	sequence[1] = 1;

	for (var i = 2; i < seqLength; i++) {
		// a fibonnaci sequence is the summing of the two previous entries in the sequence
		sequence[i] = sequence[i - 2] + sequence[i - 1];
	}

	return sequence;

};

module.exports = fib;
