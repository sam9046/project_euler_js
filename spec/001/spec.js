var MULTIPLESOF3AND5 = require("./src.js")

describe('Sum multiples of 3 and 5', function () {
    it('1 - should return sum of int array', function() {
        var multiplesOf3And5 = new MULTIPLESOF3AND5();
        expect(multiplesOf3And5.sumArray([1,2,3])).toEqual(6);
    });
    it('2 - should return multiples of 3 and 5', function() {
        var multiplesOf3And5 = new MULTIPLESOF3AND5();
        expect(multiplesOf3And5.multiple(10)).toEqual(23);
    });
    it('3 - should return sum of multiples for 1000', function() {
        var multiplesOf3And5 = new MULTIPLESOF3AND5();
        expect(multiplesOf3And5.multiple(1000)).toEqual(233168);
    });
});
