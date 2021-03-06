/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let ht = {};

  for (let i = 0; i < s.length; i++) {
    if (!ht[s[i]]) {
      ht[s[i]] = 1;
    } else {
      ht[s[i]]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (ht[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
