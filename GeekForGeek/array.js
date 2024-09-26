// https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/

// ! level 1

// min and max value in array
const minMaxArray = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
};

// console.log(minMaxArray([4, -2, 1, 4, 7]));

// reverse an array
const reverseArray = (arr) => {
  const reservedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reservedArray.push(arr[i]);
  }
  return reservedArray;
};

// console.log(reverseArray([4, -2, 1, 4, 7]));

// sort an array
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

// console.log(bubbleSort([-1, 1, 0, 3, 6, 8, -123]));

// count occurrence of element
const occurrenceArray = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
    }
  }
  return count;
};

// console.log(occurrenceArray([1, 1, 1, 2, 3, 4, 5], 1));

// move negative and positive value in array
const negativePositiveArray = (arr) => {
  let neg = [];
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  return neg.concat(pos);
};

// console.log(negativePositiveArray[-1,1,2,3,4,-2,-3,-4,])

// union and interaction of two sorted array
const unionInteractionArray = (arr1, arr2) => {
  let union = [...new Set([...arr1, ...arr2])];
  let inter = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        inter.push(arr1[i]);
      }
    }
  }
  return { union, inter };
};

// Sort an array of 0s, 1s and 2s
const sortZeroArray = (arr) => {};

// two sum
