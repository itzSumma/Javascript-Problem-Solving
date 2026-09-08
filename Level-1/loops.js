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
//Sum of 1 to N
function sumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNumbers(5));
//Multiplication Table
function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

multiplicationTable(5);
//Count Digits
function countDigits(number) {
  let count = 0;

  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }

  return count;
}

console.log(countDigits(12345)); // 5
//Reverse a Number
function countDigits(number) {
  let count = 0;

  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }

  return count;
}

console.log(countDigits(12345)); // 5
//Check Prime Number
function reverseNumber(number) {
  let reversed = 0;

  while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }

  return reversed;
}

console.log(reverseNumber(1234)); // 4321
