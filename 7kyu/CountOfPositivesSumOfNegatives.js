function countPositivesSumNegatives(input) {
     //return empty array if it's empty
     if (input === null || input.length < 1) {
        return [];  }
    const negative =[];
    const positive = [];
    //split negative and positive integers
    for (let i = 0; i < input.length; i++)
    if (input[i] < 0) {
        negative.push(input[i]);
    } else{
        positive.push(input[i]);
    }
    //get the total of negative int
    const sumNegative =negative.reduce((total, n)=>{
        return total + n;
    }, 0);
    //get the count of positive int
    const sumPositive = [];
    for (let i = 0; i < positive.length; i++) {
        if (positive[i] > 0) {
            sumPositive.push(positive[i]);
        }
    }
        return [sumPositive.length, sumNegative];
}
