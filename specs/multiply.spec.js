'use strict';

var mul = require('../solutions/multiply.js');

describe('When using mul()', function () {

	it('Check that 3 integers are being correctly multiplied together', function () {
		expect(mul(1)(2)(3)).toEqual(6);
		expect(mul(2)(3)(7)).toEqual(42);
		expect(mul(100)(200)(0)).toEqual(0);
	});

});
