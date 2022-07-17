/* 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single 
integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers) {
    const odd = integers.filter((n) => {
      return n % 2 !== 0;
    });

    const even = integers.filter((n) => {
      return n % 2 == 0;
    });

    if (odd.length == 1) {
      return Number(odd);
    } else if (even.length == 1) {
      return Number(even);
    }
  }