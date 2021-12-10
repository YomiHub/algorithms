// N数之和
//给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在N个元素，使得N个元素和与 target 相等？找出所有满足条件且不重复的N元组。
var nSum = function (nums, target, n) {
  //N数之和
  let dfs = (nums, target, n) => {
    let len = nums.length
    if (len < n) return []
    let res = []

    if (n == 2) {
      //双指针查找到所有符合的target两个数
      let left = 0
      let right = len - 1
      while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[left], nums[right]])
          while (nums[left] === nums[left + 1]) left++
          while (nums[right] === nums[right - 1]) right--
          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
      return res //所有符合的二元组
    } else {
      for (let i = 0; i < len; ++i) {
        if (i > 0 && nums[i] === nums[i - 1]) {
          continue
        }
        subRes = dfs(nums.slice(i + 1), target - nums[i], n - 1) //剩余n-1的集合
        for (let j = 0; j < subRes.length; ++j) {
          res.push([nums[i]].concat(subRes[j])) //返回结果中加上当前nums[i];
        }
      }
      return res
    }
  }

  let len = nums.length
  if (len < n) return []
  nums.sort((a, b) => {
    return a - b
  })
  return dfs(nums, target, n)
}

console.log(nSum([0, 2, 3, 5], 5, 2))

