'use strict';

// Write a mul function which will produce the following outputs when invoked:

// javascript console.log(mul(2)(3)(4)); // output : 24 console.log(mul(4)(3)(4)); // output : 48


var mul = function (x) {
	return function (y) {
		return function (z) {
			return x * y * z;
		};
	};
};

module.exports = mul;
