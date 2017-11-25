var Palindrome = require("./src.js")

describe('Palindrome', function () {
    it('1 - should return an int converted to array', function() {
        var palindrome = new Palindrome();
        var value = 123456;
        var expected = [1,2,3,4,5,6];
        var actual = palindrome.intToArray(value);
        expect(expected).toEqual(actual);
    });

    it('2 - should return NaN for an invalid int', function() {
        var palindrome = new Palindrome();
        var value = "string";
        var expected = NaN;
        var actual = palindrome.intToArray(value);
        expect(expected).toEqual(actual);
    });

    it('3 - should return true for a valid palindrome', function() {
        var palindrome = new Palindrome();
        var value = "1221";
        var expected = true;
        var actual = palindrome.isPalindrome(value);
        expect(expected).toEqual(actual);
    });

    it('4 - should return true for a valid palindrome', function() {
        var palindrome = new Palindrome();
        var value = "12000021";
        var expected = true;
        var actual = palindrome.isPalindrome(value);
        expect(expected).toEqual(actual);
    });

    it('5 - should return false for an invalid palindrome', function() {
        var palindrome = new Palindrome();
        var value = "122124";
        var expected = false;
        var actual = palindrome.isPalindrome(value);
        expect(expected).toEqual(actual);
    });

    it('6 - should return false for an invalid palindrome', function() {
        var palindrome = new Palindrome();
        var value = "908209";
        var expected = false;
        var actual = palindrome.isPalindrome(value);
        expect(expected).toEqual(actual);
    });

    it('7 - should return false for an invalid length input', function() {
        var palindrome = new Palindrome();
        var value = "12212";
        var expected = false;
        var actual = palindrome.isPalindrome(value);
        expect(expected).toEqual(actual);
    });

    it('8 - should return highest multiple of two digits', function() {
        var palindrome = new Palindrome();
        var expected = 9009;
        var actual = palindrome.getHighestPalindromeForValue(99);
        expect(expected).toEqual(actual);
    });

    it('9 - should return highest multiple of three digits', function() {
        var palindrome = new Palindrome();
        var expected = 906609;
        var actual = palindrome.getHighestPalindromeForValue(999);
        expect(expected).toEqual(actual);
    });
});
