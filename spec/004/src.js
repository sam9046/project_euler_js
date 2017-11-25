const PALINDROME = function() {
    PALINDROME.prototype.intToArray = function (value) {
        if(isNaN(parseInt(value))) return NaN;
        var sValue = value.toString();
        var result = [];

        for(var i = 0; i < sValue.length; i++) {
            result.push(parseInt(sValue.charAt(i)));
        }

        return result;
    };
    PALINDROME.prototype.isPalindrome = function (value) {
        var intArray = this.intToArray(value);
        var half = Math.ceil(intArray.length / 2);
        var left = intArray.splice(0, half);
        var right = intArray;

        if(left.length !== right.length) return false;

        for(var i = 0; i < left.length; i++) {
            if(left[i] !== right[right.length - 1 - i]) {
                return false;
            }
        }
        return true;
    };
    PALINDROME.prototype.getHighestPalindromeForValue = function (value) {
        var max = 0;
        for (var i = value; i > 0; i--) {
            for (var j = i; j > 0; j--) {
                var sum = j * i;
                if (this.isPalindrome(sum) && sum > max) {
                    max = i * j;
                }
            }
        }

        return max;
    }
};

module.exports = PALINDROME
