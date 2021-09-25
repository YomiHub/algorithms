
//-----------------------------------------------------------------
//删除排序数组中的重复项
//给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成

//执行用时 :76 ms, 在所有 javascript 提交中击败了94.62%的用户
//内存消耗 :37.1 MB, 在所有 javascript 提交中击败了44.02%的用户
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};


//执行用时 :84 ms, 在所有 javascript 提交中击败了77.86%的用户
//内存消耗 :37.1 MB, 在所有 javascript 提交中击败了45.84%的用户
var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len < 2) { return len; }
  let i = 0;
  let j = i + 1;
  while (j <= len - 1) {
    if (nums[j] != nums[i]) {
      if (i + 1 != j) nums[i + 1] = nums[j];
      i += 1;
    }
    j += 1;
  }
  return i + 1;
}


//执行用时 :80 ms, 在所有 javascript 提交中击败了74.45%的用户
//内存消耗 :36 MB, 在所有 javascript 提交中击败了34.28%的用户
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1] || (nums[i] == nums[i + 1] && nums[i] != nums[i + 2])) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

/* 示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按升序排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */