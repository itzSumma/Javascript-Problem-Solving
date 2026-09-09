//Find Sum of Array
function arraySum(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(arraySum([10, 20, 30])); // 60

//Find Largest Number
function findLargest(numbers) {
  let largest = numbers[0];

  for (const number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }

  return largest;
}

console.log(findLargest([10, 5, 25, 8])); // 25

//Find Smallest Number
function findSmallest(numbers) {
  let smallest = numbers[0];

  for (const number of numbers) {
    if (number < smallest) {
      smallest = number;
    }
  }

  return smallest;
}

console.log(findSmallest([10, 5, 25, 8])); // 5

//Count Even Numbers
function countEvenNumbers(numbers) {
  let count = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEvenNumbers([1, 2, 4, 7, 8])); // 3
function countEvenNumbers(numbers) {
  let count = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEvenNumbers([1, 2, 4, 7, 8])); // 3

// Reverse an Array
function reverseArray(numbers) {
  let reversed = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4]));
// [4, 3, 2, 1]