// two pointer (only work on sorted array)
const twoSum = (arr, n) => {
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    let sum = arr[left] + arr[right];
    if (sum === n) {
      return [left, right];
    } else if (sum > n) {
      right--;
    } else {
      left++;
    }
  }
  return null;
};

console.log(twoSum([1, 2, 34, 56, 78, 89], 3));

const reverseArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    console.log(arr);
    right--;
    left++;
  }
  return arr;
};
