//Create a function that checks if a number n is divisible by two numbers x AND y. 

function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
      return true;
    } else {
      return false;
    }
  }