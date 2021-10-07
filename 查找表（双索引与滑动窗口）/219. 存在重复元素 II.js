//-----------------------------------------------------------------
//存在重复元素 II
//给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，
//使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k

//执行用时 :1840 ms, 在所有 javascript 提交中击败了13.58%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了61.16%的用户
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let first = nums.indexOf(nums[i], i)
    let last = nums.indexOf(nums[i], first + 1)

    if (last != -1) {
      // console.log(first, last)
      let abs = Math.abs(last - first)
      if (abs <= k) {
        return true
      }
    }
  }

  return false
}

//执行用时 :68 ms, 在所有 javascript 提交中击败了92.48%的用户
//内存消耗 :39 MB, 在所有 javascript 提交中击败了50.42%的用户
var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length

  if (len <= 1) return false
  let count = new Set()
  for (let i = 0; i < len; i++) {
    if (count.has(nums[i])) {
      return true
    }

    count.add(nums[i])
    if (count.size > k) {
      count.delete(nums[i - k])
    }
  }
  return false
}

//执行用时 :1604 ms, 在所有 javascript 提交中击败了20.00%的用户
//内存消耗 :38.6 MB, 在所有 javascript 提交中击败了53.72%的用户
var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length

  if (len <= 1) return false
  let count = []
  for (let i = 0; i < len; i++) {
    if (count.includes(nums[i])) {
      return true
    }

    count.push(nums[i])
    if (count.length > k) {
      count.shift()
    }
  }
  return false
}

//执行用时 :96 ms, 在所有 javascript 提交中击败了47.52%的用户
//内存消耗 :42.6 MB, 在所有 javascript 提交中击败了14.05%的用户
var containsNearbyDuplicate = function (nums, k) {
  let hash = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = i
    } else {
      if (i - hash[nums[i]] <= k) return true
      hash[nums[i]] = i
    }
  }
  return false
}
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))

/* 
示例 2:
输入: nums = [1,0,1,1], k = 1
输出: true

示例 3:
输入: nums = [1,2,3,1,2,3], k = 2
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
