'use strict';

var fizzBuzz = require('../solutions/fizzBuzz.js');

describe('When using fizzbuzz()', function () {

	it('should output the number if not divisible by 3 or 5', function () {
		expect(fizzBuzz(100)[4]).toEqual(4);
		expect(fizzBuzz(100)[28]).toEqual(28);
		expect(fizzBuzz(100)[43]).toEqual(43);
	});

	it('should output fizz when a number is divisible by 3', function () {
		expect(fizzBuzz(100)[3]).toEqual('fizz');
		expect(fizzBuzz(100)[69]).toEqual('fizz');
		expect(fizzBuzz(100)[81]).toEqual('fizz');
	});

	it('should output buzz when a number is divisible by 5', function () {
		expect(fizzBuzz(100)[20]).toEqual('buzz');
		expect(fizzBuzz(100)[55]).toEqual('buzz');
		expect(fizzBuzz(100)[85]).toEqual('buzz');
	});

	it('should output fizzbuzz when a number is divisible by both 3 and 5', function () {
		expect(fizzBuzz(100)[15]).toEqual('fizzbuzz');
		expect(fizzBuzz(100)[45]).toEqual('fizzbuzz');
		expect(fizzBuzz(100)[90]).toEqual('fizzbuzz');
	});

});
