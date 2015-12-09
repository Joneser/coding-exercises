'use strict';

/**
 * Simple bubblesort algorithm
 * @desc Simple bubblesort algorithm to sort a number array into ascending order
 * @param {array} inputArray - array of numbers which are to be sorted
 * @return {array} inputArray - the sorted array of numbers
 */
var bubbleSort = function (inputArray) {

	var sorted = false;
	
	// check that all elements in the array is a number, if they aren't return an error
	if (!inputArray.every(function(element, index, array){return typeof element === 'number';})) {
		return 'all elements in the array must be a number';
	}

	do {
		sorted = false;
   		for(var i = 0; i < inputArray.length - 1; i++) {
			
			if(inputArray[i] > inputArray[i+1]) {
				var temp = inputArray[i];
				inputArray[i] = inputArray[i+1];
				inputArray[i+1] = temp;
				sorted = true;	
			}
		}

	} while (sorted);

	return inputArray;

};

module.exports = bubbleSort;
