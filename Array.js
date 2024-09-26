// https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/

// reverse an array
const reverseArray = (array) => {
  let reservedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reservedArray.push(array[i]);
  }
  return reservedArray;
};

// console.log(reverseArray([1, 2, 3, 4, 5]));

// max and min number in array
const maxMinArray = (array) => {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return [min, max];
};

const maxMinArraySort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// console.log(maxMinArraySort([1, 2, 7, 4, 3, 6]));

// frequency of element in array
const occurrenceElement = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count = count + 1;
    }
  }
  return count === 0 ? "element not present" : count;
};

// console.log(occurrenceElement([1, 2, 3, 4, 5, 5, 5], 10));

// Move all negative numbers to beginning and positive to end with constant extra space
// const moveNegativePositive = (arr) => {
//   let neg = [];
//   let pos = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       pos.push(arr[i]);
//     } else {
//       neg.push(arr[i]);
//     }
//   }
//   return neg.concat(pos);
// };

const moveNegativePositive = (arr) => {
  let i = 0;  // Pointer to track the position for negative numbers
  
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < 0) { // Check if current element is negative
      // Swap negative number to the front
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++; // Move the pointer to the next position
    }
  }
  
  return arr; // Return the modified array
};


console.log(moveNegativePositive([-5,-3,-5,6,72,-56,67,32,6,-87]));  
