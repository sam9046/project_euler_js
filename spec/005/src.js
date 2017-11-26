const EULER = function() {
    // https://codereview.stackexchange.com/a/67946
    EULER.prototype.calculateMultiple = function(ceiling) {
        var multiple = 1;
        for(var i = multiple; i <= ceiling; i++) {
            var sum = multiple;
            while(sum % i != 0) {
                sum += multiple;
            }
            multiple = sum;
        }
        return multiple;
    };
};

module.exports = EULER
