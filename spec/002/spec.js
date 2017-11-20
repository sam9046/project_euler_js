var Fibonacci = require("./src.js")

describe('Fibonacci', function () {
    it('1 - should generate fibonacci up to 4m', function() {
        var fibonacci = new Fibonacci();
        expect(fibonacci.generateFibonacci(4000000)).toEqual(4613732);
    });
});
