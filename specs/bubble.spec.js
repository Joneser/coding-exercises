'use strict';

var bubble = require('../solutions/bubbleSort.js');

describe('When using bubble()', function () {

	it('Check that the input array is being returned in the correct sorted order', function () {
		expect(bubble([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])[6]).toEqual(7);
		expect(bubble([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])[0]).toEqual(1);
		expect(bubble([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])[9]).toEqual(10);
		expect(bubble([10, 9, 8, 7, 'bla', 5, 4, 3, 2, 1])).toEqual('all elements in the array must be a number');
	});

});
