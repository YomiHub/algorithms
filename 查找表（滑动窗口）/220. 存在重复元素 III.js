//-----------------------------------------------------------------
//存在重复元素 III
//给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t
//同时又满足 abs(i - j) <= k 。

//如果存在则返回 true，不存在返回 false。

//执行用时 :260 ms, 在所有 javascript 提交中击败了64.52%的用户
//内存消耗 :35.4 MB, 在所有 javascript 提交中击败了29.63%的用户
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let len = nums.length
  if (len <= 1) return false
  var res = []
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < res.length; j++) {
      if (Math.abs(res[j] - nums[i]) <= t) {
        //&& j - i <= k
        return true
      }
    }

    res.push(nums[i])
    if (res.length > k) {
      res.shift()
    }
  }
  return false
}
//执行用时 :64 ms, 在所有 javascript 提交中击败了94.19%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了22.22%的用户
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let len = nums.length

  if (len <= 1) return false
  let count = new Set()
  for (let i = 0; i < len; i++) {
    if (t == 0) {
      if (count.has(nums[i])) {
        return true
      }
    } else {
      for (let x of count) {
        if (Math.abs(nums[i] - x) <= t) {
          return true
        }
      }
    }
    count.add(nums[i])
    if (count.size > k) {
      count.delete(nums[i - k])
    }
  }
  return false
}

//执行用时 :300 ms, 在所有 javascript 提交中击败了53.55%的用户
//内存消耗 :35.4 MB, 在所有 javascript 提交中击败了25.93%的用户
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      var temp = Math.abs(nums[j] - nums[i])
      if (temp <= t && j - i <= k) {
        return true
      }
    }
  }
  return false
}

console.log(
  containsNearbyAlmostDuplicate((nums = [1, 5, 9, 1, 5, 9]), (k = 2), (t = 3))
)

/*
示例 2：
输入：nums = [1,0,1,1], k = 1, t = 2
输出：true

示例 3：
输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false
 

提示：
0 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 104
0 <= t <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
