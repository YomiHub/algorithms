//-----------------------------------------------------------------
//两数之和
//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
var twoSum = function (nums, target) {
  var res = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        res.push(i, j)
        return res
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))

//dict查找表
var twoSum = function (nums, target) {
  let res = {}
  for (let i = 0; i < nums.length; i++) {
    if (res.hasOwnProperty(nums[i])) {
      return [res[nums[i]], i] //找到i下标对应要找的值，则返回
    } else {
      res[target - nums[i]] = i //保存对应i下标要找的值
    }
  }
}

//执行用时 :152 ms, 在所有 javascript 提交中击败了33.55%的用户
//内存消耗 :34.3 MB, 在所有 javascript 提交中击败了84.79%的用户
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let result = nums.lastIndexOf(target - nums[i])
    if (result !== -1 && result !== i) {
      return [i, result]
    }
  }
}

//执行用时 :188 ms, 在所有 javascript 提交中击败了21.58%的用户
//内存消耗 :34.2 MB, 在所有 javascript 提交中击败了86.93%的用户
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]
    let j = nums.indexOf(difference)
    if (j > -1 && i != j) {
      return [i, j]
    }
  }
}

/* 
示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
 

提示：

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案
进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
