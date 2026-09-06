//Problem 06: Check Even or Odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }

  return "Odd";
}

console.log(checkEvenOdd(10)); // Even
console.log(checkEvenOdd(11)); // Odd