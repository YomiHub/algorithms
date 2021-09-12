
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 执行用时：108 ms, 在所有 JavaScript 提交中击败了38.17%的用户
// 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了15.33%的用户
var findKthLargest = function (nums, k) {
  var sortArr = quickSort(nums, k);
  return sortArr[k - 1];
  //return nums.sort((a, b) => b - a)[k - 1];
};

//快排
function quickSort(nums, k) {
  if (nums.length < 2) return nums;

  var left = [],
    right = [],
    mid = nums.splice(Math.floor(nums.length / 2), 1);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > mid) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  if (left.length == k) {
    return quickSort(left, 1); //从大到小完整排序
  } else if (left.length > k) {
    return quickSort(left, k);
  } else {
    return left.concat(mid, quickSort(right, k - left.length - 1));
  }
}

var testArr = [3, 2, 3, 1, 2, 4, 5, 5, 6];

console.log(findKthLargest(testArr, 4));
//console.log(quickSort(testArr,2));

//堆排

