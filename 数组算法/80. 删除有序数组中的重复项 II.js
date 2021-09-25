//-----------------------------------------------------------------
//删除排序数组中的重复项
//给定一个排序数组，你需要在原地删除重复出现的元素，使每个元素 最多出现 两次
//返回删除后数组的新长度。不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成

//执行用时 :64 ms, 在所有 javascript 提交中击败了99.76%的用户
//内存消耗 :36 MB, 在所有 javascript 提交中击败了35.71%的用户
var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len <= 2) return len;
  let i = 1;
  let j = i - 1;
  let k = i + 1;

  while (k <= len - 1) {
    if (nums[i] != nums[k] || (nums[i] == nums[k] && nums[j] != nums[k])) {
      j = i;
      nums[i + 1] = nums[k];
      i += 1;
    }
    k++;
  }
  return i + 1;
};

//两边与中间相等, 则删除中间的
//执行用时 :84 ms, 在所有 javascript 提交中击败了53.28%的用户
//内存消耗 :36 MB, 在所有 javascript 提交中击败了34.28%的用户
var removeDuplicates = function (nums) {
  for (var i = 1; i < nums.length - 1; i++) {
    if (nums[i] == nums[i - 1] && nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};


//执行用时 :76 ms, 在所有 javascript 提交中击败了90.51%的用户
//内存消耗 :36 MB, 在所有 javascript 提交中击败了31.43%的用户
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 2]) {
      nums.splice(i--, 1)
    }
  }
  return nums.length
};

/* 示例 2：

输入：nums = [0,0,1,1,1,1,2,3,3]
输出：7, nums = [0,0,1,1,2,3,3]
解释：函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。 不需要考虑数组中超出新长度后面的元素。
 

提示：

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按升序排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */