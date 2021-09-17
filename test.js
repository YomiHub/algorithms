/*
 * @Date: 2021-01-04 15:37:04
<<<<<<< HEAD
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-17 20:03:30
 */

//-----------------------------------------------------------------
//给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
//请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。


//【解法一】：推荐
//从后往前确定两组中该用哪个数字
//结束条件以第二个数组全都插入进去为止

//执行用时：64 ms, 在所有 JavaScript 提交中击败了92.18%的用户
//内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了93.77%的用户
function swap(arr1, i, arr2,j) {
  let temp = arr1[i];
  arr1[i] = arr2[j];
  arr2[j] = temp;
}
var merge = function(nums1, m, nums2, n) {
  let i = nums1.length-1;
  m--;
  n--;
  //从后往前，比较最大的数
  while(n>=0){
    while(m>=0&&nums1[m]>nums2[n]){
      //数组一最大值大于数组二，表示为前i项最大值
      swap(nums1, i, nums1,m);
      i--;
      m--;
    }
    swap(nums1, i, nums2,n);
    i--;
    n--;
  }
};

//【解法二】:从后往前比较最大值，逐个插入，较大数组剩余元素拷贝到nums1
//执行用时：80 ms, 在所有 JavaScript 提交中击败了33.51%的用户
//内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了51.03%的用户
var merge = function(nums1, m, nums2, n){
  var i = m-1, j = n-1, k = m+n-1;
  while(i>=0&&j>=0){
    if(nums1[i]<nums2[j]){
      nums1[k] = nums2[j--];
    }else{
      nums1[k] = nums1[i--]
    }
    k--; //找到前k项最大值后，指针前移
  }

  while(i>=0) nums1[k--] = nums1[i--]; //剩余元素拷贝过去
  while(j>=0) nums1[k--] = nums2[j--]; //剩余元素拷贝过去
}


//【解法三】:从后往前插入元素，合并数组，再用快排进行排序
//执行用时：76 ms, 在所有 JavaScript 提交中击败了46.54%的用户
//内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了5.03%的用户
function quickSort(array, left, right) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
      if (left < right) {
          var x = array[right], i = left - 1, temp;
          for (var j = left; j <= right; j++) {
              if (array[j] <= x) {
                  i++;
                  temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
              }
          }
          quickSort(array, left, i - 1);
          quickSort(array, i + 1, right);
      }
      return array;
  } else {
      return 'array is not an Array or left or right is not a number!';
  }
}
var merge = function (nums1, m, nums2, n) {
  if (nums2.length < 1) return;

  let i = m+n-1;
  while (nums2.length > 0) {
      nums1[i] = nums2.splice(0,1)[0];
      i--;
  }
 
  quickSort(nums1,0,m+n-1);
};


var nums1 = [1,3,4,0,0,0,0];
var nums2 = [6,7,8,9];

merge(nums1,3,nums2,4);
console.log(nums1)
