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
//Find Largest of Three Numbers
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  }

  return c;
}

console.log(findLargest(10, 25, 15)); // 25 

//Check Voting Eligibility
function canVote(age) {
  if (age >= 18) {
    return "Eligible";
  }

  return "Not Eligible";
}

console.log(canVote(20)); // Eligible
console.log(canVote(17)); // Not Eligible