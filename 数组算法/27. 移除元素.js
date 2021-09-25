//-----------------------------------------------------------------
//移除元素
//给定一个数组 nums和一个值val，你需要原地移除所有数值等于val的元素，返回移除后数组的新长度。

//不要使用额外的数组空间，你必须在原地修改输入数组并在使用O(1)额外空间的条件下完成。
//元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。


//执行用时 :64 ms, 在所有 javascript 提交中击败了77.37%的用户
//内存消耗 :34.2 MB, 在所有 javascript 提交中击败了5.58%的用户
var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

var removeElement = function (nums, val) {
  let len = nums.length;
  let i = -1;
  let j = 0;
  while (j <= len - 1) {
    if (nums[j] != val) {
      i += 1;
      nums[i] = nums[j];
    }
    j += 1;
  }
  return i + 1;
};

//执行用时 :72 ms, 在所有 javascript 提交中击败了37.31%的用户
//内存消耗 :34.4 MB, 在所有 javascript 提交中击败了5.04%的用户
var removeElement = function (nums, val) {
  var len = nums.length;
  for (var i = len; i--;) {
    if (nums[i] !== val) {
      nums.push(nums[i]);   //nums.unshift(nums[i]); i++; j++;
    }
  }
  return nums.splice(0, len).length;
};

//执行用时 :64 ms, 在所有 javascript 提交中击败了77.37%的用户
//内存消耗 :34.4 MB, 在所有 javascript 提交中击败了5.04%的用户
var removeElement = function (nums, val) {
  var lang = nums.length;
  for (var i = 0; i < lang; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};


console.log(removeElement(nums = [3, 2, 2, 3], val = 3));

/* 
示例 1：
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

示例 2：
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */