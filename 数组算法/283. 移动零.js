//-----------------------------------------------------------------
//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//必须在原数组上操作，不能拷贝额外的数组。
//尽量减少操作次数

//执行用时 :64 ms, 在所有 javascript 提交中击败了97.33%的用户
//内存消耗 :35.8 MB, 在所有 javascript 提交中击败了26.23%的用户
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }
  //填充count个0到末尾
  while (count-- != 0) {
    nums.push(0)
  }
};

//执行用时 :72 ms, 在所有 javascript 提交中击败了83.12%的用户
//内存消耗 :35.8 MB, 在所有 javascript 提交中击败了24.65%的用户
var moveZeroes = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1))  //nums.splice(nums.indexOf(0), 1); indexOf每次查找效率很低
      len--;
      i--;
    }
  }
  return nums;
};

//原地替换，而不消耗额外的空间，即空间复杂度要在O（1）。因此我们采用经典的双指针来解决，现实遍历数组将非0的元素依次存数组中。循环结束后看两个指针差多少，即补足0即可
// 1. 快指针寻找非0元素，慢指针填充元素。
// 2. 最后慢指针将剩余的位置全部填充为0


//执行用时 :80 ms, 在所有 javascript 提交中击败了47.43%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了7.04%的用户
var moveZeroes = function (nums) {
  var i = 0, j = 0;
  for (; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
  }
  for (; i < j; i++) {
    nums[i] = 0;
  }
  return nums;
};

//记录0的位置，遇到非0交换

//执行用时 :76 ms, 在所有 javascript 提交中击败了66.19%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了7.04%的用户
var moveZeroes = function (nums) {
  let n = 0,
    index = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == 0) {
      n++;
      if (n == 1) {
        index = i;
      }
    } else if (n > 0) {
      nums[index] = nums[i];
      nums[i] = 0;
      index = index + 1;
    }
  }
}


console.log(moveZeroes([0, 1, 0, 3, 12]))


/* 
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */