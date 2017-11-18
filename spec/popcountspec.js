var Popcount = require("../src/js/popcount.js")

describe('Convert int to binary using divide and remainder approach', function () {
    var popcount = new Popcount();

    it('1 - should return int as binary', function() {
        var result = popcount.countBitsWithRemainder(0);
        expect(result).toEqual(0);
    });

    it('2 - should return int as binary', function() {
        var result = popcount.countBitsWithRemainder(8);
        expect(result).toEqual(1);
    });

    it('3 - should return int as binary', function() {
        var result = popcount.countBitsWithRemainder(15);
        expect(result).toEqual(4);
    });

    it('4 - should return int as binary', function() {
        var result = popcount.countBitsWithRemainder(19);
        expect(result).toEqual(3);
    });

    it('5 - largest number test', function() {
        var result = popcount.countBitsWithRemainder(1000000);
        expect(result).toEqual(7);
    });

    it('6 - negative number test', function() {
        var result = popcount.countBitsWithRemainder(-1);
        expect(result).toEqual(0);
    });

});

describe('Convert int to binary using bitwise approach', function () {
    var popcount = new Popcount();

    it('1 - should count the number of bits for 0', function() {
        var result = popcount.countBits(0);
        expect(result).toEqual(0);
    })

    it('2 - should count the number of bits for 8', function() {
        var result = popcount.countBits(8);
        expect(result).toEqual(1);
    })

    it('3 - should count the number of bits for 15', function() {
        var result = popcount.countBits(15);
        expect(result).toEqual(4);
    })

    it('4 - should return decimal as binary for 19', function() {
        var result = popcount.countBits(19);
        expect(result).toEqual(3);
    });

    it('5 - largest number test', function() {
        var result = popcount.countBits(1000000);
        expect(result).toEqual(7);
    });

    it('6 - negative number test', function() {
        var result = popcount.countBits(-1);
        expect(result).toEqual(0);
    });

});
