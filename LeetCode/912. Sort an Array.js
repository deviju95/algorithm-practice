/**
 * @param {number[]} nums
 * @return {number[]}
 */

let merge = (left, right) => {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

var sortArray = function (nums) {
  // base case
  if (nums.length <= 1) return nums;

  // recursive case
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge(left, right);
};

//HINT! I chose Merge Sort
// t= n logn, s = n
