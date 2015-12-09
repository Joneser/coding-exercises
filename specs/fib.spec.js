'use strict';

var fib = require('../solutions/fib.js');

describe('When using fib()', function () {

	it('Check that the correct fibonnaci sequence is being returned', function () {
		expect(fib(10)[3]).toEqual(2);
		expect(fib(10)[7]).toEqual(13);
		expect(fib(50)[35]).toEqual(9227465);
	});

});
