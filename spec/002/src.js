const FIBONACCI = function() {
    FIBONACCI.prototype.generateFibonacci = function (limit) {
        var a = 0, b = 2;
        var sum = a + b;
        while(b <= limit) {
            var c = 4 * b + a;
            if(c > limit) {
                break;
            } else {
                a = b;
                b = c;
                sum += b;
            }
        }

        return sum;
    };
};

module.exports = FIBONACCI
