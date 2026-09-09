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