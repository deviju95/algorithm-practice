/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]]; // [[1,3]]

  for (let interval of intervals) {
    // [2,6]
    let e1 = result[result.length - 1][1]; // 3
    let s2 = interval[0]; // 2
    let e2 = interval[1]; // 6

    if (e1 >= s2) {
      // 3 >= 2
      result[result.length - 1][1] = Math.max(e1, e2); // 6
    } else {
      result.push(interval); // [[1,6], [8,10]]
    }
  }

  return result;
};
// t = n log n (sort) , s = n