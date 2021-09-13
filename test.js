/*
 * @Date: 2021-01-04 15:37:04
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-13 20:06:34
 */

//选择排
function selectSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var min = i;
    for (var j = min + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;   //记录最小的位置
      }
    }

    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}


var findKthLargest = function (nums, k) {
  var sortArr = selectSort(nums);
  return sortArr[k - 1];
};

