// 06 23 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 1: [] [1]
  // 2: [] [2] [1] [1,2]
  // 3: [] [3] [2] [2,3] [1] [1,2,3]

  const result = [];

  const dfs = (i, nums, slate) => {
    //base case
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    //recursive case
    dfs(i + 1, nums, slate);

    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  return result;
};
// Time: 2^n * linear time operation n
// Space: n * 2^n

// 05 20 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    dfs(i + 1, nums, slate);

    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  return result;
};
// Time: 2^N * N

// 05 17 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    let el = nums[i];

    dfs(i + 1, nums, slate);

    slate.push(el);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  return result;
};
// Time: 2^n * n == recursion logic && result scan
// Space: 2^n * n == result && recursion stack

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  //global result
  let result = [];

  // dfs helper function
  const dfs = (i, nums, slate) => {
    // base case
    if (i === nums.length) {
      result.push(slate.slice()); // push a copy of slate so we can reuse state array
      return;
    }

    // dfs  recursive case

    // exclude current case
    dfs(i + 1, nums, slate);
    // include current case
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  return result;
};

//T:: O(2^n (recursive) *n (making copy of leaf level))
//S:: O(2^n (copying leaf level to result array) *n (recursive call stack))
