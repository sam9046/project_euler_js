var FIBONACCI = require("./src.js")

describe('Fibonacci', function () {
    it('1 - should generate fibonacci up to 4m', function() {
        var fibonacci = new FIBONACCI();
        expect(fibonacci.generateFibonacci()).toEqual([1, 2, 3, 5, 8, 13, 21]);
    });
});
