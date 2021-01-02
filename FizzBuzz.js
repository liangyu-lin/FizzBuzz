//print fizz if theres a 3 showing, print buzz if 5 is showing, and fizzbuzz if both 3 and 5 are showing. Print 1 - 100


for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        ​​
        console.log(i);
    }
}


