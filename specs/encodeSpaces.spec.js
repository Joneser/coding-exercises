'use strict';

var encodeSpaces = require('../solutions/encodeSpaces.js');

describe('When using encodeSpaces()', function () {

	it('Check that spaces are being correctly encoded', function () {
		expect(encodeSpaces('1234 567890')).toEqual('1234%20567890');
		expect(encodeSpaces('abcd efgh')).toEqual('abcd%20efgh');
		expect(encodeSpaces('   ')).toEqual('%20%20%20');
	});

});
