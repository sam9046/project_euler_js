const FIBONACCI = function() {
    FIBONACCI.prototype.generateFibonacci = function () {
        var fibonacciSequence = [1, 2];

        for(var i = 0; i < 5; i++) {
            fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i + 1]);
        }

        return fibonacciSequence;
    };
};

module.exports = FIBONACCI
