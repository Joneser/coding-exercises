
/*
* @description This functions takes a string and determines if it contains all uniqeue characters
* @param {string} The string to check;
* @return {boolean} Returns a true/false indicating if the string contains all unique characters 
*/
function checkForUnique(stringValue) {
	var charMap = {};
	
	for(var i = 0; i < stringValue.length; i++) {
		if(charMap[stringValue[i]]) {
			// If the string key has already been created, then this is the second time it has been found, return false!
			return false;
		} else {
			// initialise the key in the map
			charMap[stringValue[i]] = 1;
		}
	}
	// if it exits the for-loop successfully, all characters are unique, return true!
	return true;
}



// some simple tests for the above function
console.log('true', checkForUnique('abcdefg'));
console.log('true', checkForUnique('AI649^)'))
console.log('true', checkForUnique('Testing'))
console.log('true', checkForUnique('1234567890LiIl'))
console.log('false', checkForUnique('testing'))
console.log('false', checkForUnique('output'))
console.log('false', checkForUnique('this is a really long string that is definitely not all unique'))
console.log('false', checkForUnique('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
console.log('false', checkForUnique('                                      '))