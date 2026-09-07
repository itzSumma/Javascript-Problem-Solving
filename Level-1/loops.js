//Print 1 to N
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5);
//Print Even Numbers
function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(10);