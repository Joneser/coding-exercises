'use strict';

/**
 * @desc Takes a sentance and converts all words of a certain length to uppercase
 * @param {string} sentenceString - This is the sentence in which the words will be converted
 * @param {number} wordLength - This is the arg defining the length of words to be converted
 * @return {string}    - Sentence with necessary words converted
 */

var convertToUpper = function (sentenceString, wordLength) {

	// if the sentence is of incorrect form, return null
	if (typeof sentenceString !== 'string') {
		return null;
	}

	// if there is no wordlength defined, just return the original sentence
	if (!wordLength || typeof wordLength !== 'number') {
		return sentenceString;
	}

	var sentenceArray = sentenceString.split(' ');
	for (var i = 0; i < sentenceArray.length; i++) {
		if (sentenceArray[i].length === wordLength) {
			sentenceArray[i] = sentenceArray[i].toUpperCase();
		}
	}

	return sentenceArray.join(' ');

};

module.exports = convertToUpper;
