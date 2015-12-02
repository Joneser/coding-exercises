'use strict';

var encodeSpaces = function(stringToEncode) {
	
	return stringToEncode.split(' ').join('%20');
	
}

module.exports = encodeSpaces;