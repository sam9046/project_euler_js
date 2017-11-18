const Popcount = function() {
    // solution using divide and remainder approach https://www.wikihow.com/Convert-from-Decimal-to-Binary
    this.countBitsWithRemainder = function(value) {
        var count = 0;
        var remainder;
        while(value > 0) {
            remainder = value % 2;
            if(remainder > 0) {
                count++;
            }
            value = (value - remainder) / 2;
        }

        return count;
    }

    // solution counting bits and using bitwise operators
    this.countBits = function(value) {
        var count = 0;
        while (value > 0) {
            // if bit is equal to 1 then add to count
            if ((value & 1) === 1)
                count++;
            // shift bits 1 to the right
            value >>= 1;
        }

        return count;
    }
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number ', (answer) => {
  var popcount = new Popcount();

  if(answer < 0) {
      console.log("You need to enter a positive number.");
  } else if(answer > 2147483647) {
      console.log("You need to enter a lower number.");
  } else {
      var result = popcount.countBits(answer);
      console.log(`There are ${result} bits in that number.`);
  }

  rl.close();
});

module.exports = Popcount;
