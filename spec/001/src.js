const MULTIPLESOF3AND5 = function() {
    MULTIPLESOF3AND5.prototype.sumArray = function (values) {
        return values.reduce((a, b) => a + b);
    };

    MULTIPLESOF3AND5.prototype.multiple = function (value) {
        var result = [];
        for(var i = 0; i < value; i++) {
            if(i % 3 === 0 || i % 5 === 0)
                result.push(i);
        }
        return this.sumArray(result);
    }
};

module.exports = MULTIPLESOF3AND5
