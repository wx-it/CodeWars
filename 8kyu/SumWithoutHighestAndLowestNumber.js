/*Sum all the numbers of a given array ( cq. list ),
except the highest and the lowest element ( by value, not by index! ).*/

function sumArray(array) {
    if(!Array.isArray(array) || array.length == 1 || array.length == 0) return 0;
    let max = Math.max(...array);
    let min = Math.min(...array);

    let arraySum = array.reduce((sum, n) => {
      return sum + n;
    }, 0);

    return arraySum - min - max;
  }