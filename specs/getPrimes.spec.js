'use strict';

var getPrimes = require('../solutions/getPrimes.js');

describe('When using getPrimes()', function () {

	it('Check that primes are being correctly retrieved', function () {
		expect(getPrimes(10).length).toEqual(4);
		expect(getPrimes(100).length).toEqual(25);
		expect(getPrimes(100)[23]).toEqual(89);
		expect(getPrimes(100)[3]).toEqual(7);
	});

});
