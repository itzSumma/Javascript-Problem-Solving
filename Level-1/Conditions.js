// Check Even or Odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }

  return "Odd";
}

console.log(checkEvenOdd(10)); // Even
console.log(checkEvenOdd(11)); // Odd

//Check Positive, Negative or Zero
function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  }

  return "Zero";
}

console.log(checkNumber(-5)); // Negative
console.log(checkNumber(5)); // Positive
console.log(checkNumber(0)); // Zero 

//Find Largest of Two Numbers
function findLargest(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}

console.log(findLargest(20, 15)); // 20