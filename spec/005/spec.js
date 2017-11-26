var Euler = require("./src.js")

describe('005', function () {
    it('1 - should return correct maximum for a multiple of 10', function() {
        var euler = new Euler();
        var ceiling = 10;
        var expected = 2520;
        var actual = euler.calculateMultiple(ceiling);
        expect(expected).toEqual(actual);
    });

    it('2 - should return correct maximum for a multiple of 20', function() {
        var euler = new Euler();
        var ceiling = 20;
        var expected = 232792560;
        var actual = euler.calculateMultiple(ceiling);
        expect(expected).toEqual(actual);
    });

    it('3 - should return correct maximum for a multiple of 30', function() {
        var euler = new Euler();
        var ceiling = 30;
        var expected = 2329089562800;
        var actual = euler.calculateMultiple(ceiling);
        expect(expected).toEqual(actual);
    });
});
