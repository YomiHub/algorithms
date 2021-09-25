//-----------------------------------------------------------------
//四数之和
//给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
//0 <= a, b, c, d < n
//a、b、c 和 d 互不相同
//nums[a] + nums[b] + nums[c] + nums[d] == target
//你可以按 任意顺序 返回答案 。

//转为为求三数之和
//执行用时 :96 ms, 在所有 javascript 提交中击败了95.30%的用户
//内存消耗 :37.1 MB, 在所有 javascript 提交中击败了42.64%的用户
var fourSum = function (nums, target) {
  if (!nums || nums.length < 4) return []
  nums.sort((a, b) => {
    return a - b
  })

  let res = []
  for (let i = 0; i < nums.length; i++) {
    let threeSum = target - nums[i]
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      let l = j + 1
      let r = nums.length - 1

      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue
      }
      while (l < r) {
        let sum = nums[j] + nums[l] + nums[r]
        if (sum < threeSum) {
          l++
        } else if (sum > threeSum) {
          r--
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while (nums[l] === nums[l + 1]) l++
          while (nums[r] === nums[r - 1]) r--
          l++
          r--
        }
      }
    }
  }
  return res
}

//固定中间两个数然后不断逼近
//执行用时 :124 ms, 在所有 javascript 提交中击败了48.90%的用户
//内存消耗 :37.7 MB, 在所有 javascript 提交中击败了31.01%的用户
var fourSum = function (nums, target) {
  if (nums.length < 4) return []
  nums.sort((a, b) => a - b)
  var hash = new Map()
  for (var midF = 1; midF < nums.length - 2; midF++) {
    for (var mid = midF + 1; mid < nums.length - 1; mid++) {
      if (mid - 1 !== midF && nums[mid] === nums[mid - 1]) continue
      var start = 0,
        end = nums.length - 1
      while (start < midF && end > mid) {
        if (nums[start] + nums[midF] + nums[mid] + nums[end] === target) {
          var arr = [nums[start], nums[midF], nums[mid], nums[end]],
            str = arr.join("-")
          if (hash.has(str) === false) {
            hash.set(str, arr)
          }
        }
        if (nums[start] + nums[midF] + nums[mid] + nums[end] > target) end -= 1
        else start += 1
      }
    }
  }
  return [...hash].map((a) => a[1])
}

//双指针+Set去重
//执行用时 :124 ms, 在所有 javascript 提交中击败了48.90%的用户
//内存消耗 :38 MB, 在所有 javascript 提交中击败了24.81%的用户

var fourSum = function (nums, target) {
  let set = new Set()
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let start = j + 1,
        end = nums.length - 1
      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end]
        if (sum < target) {
          start++
        } else if (sum > target) {
          end--
        } else {
          set.add([nums[i], nums[j], nums[start], nums[end]].join(","))
          start++
          end--
        }
      }
    }
  }
  return [...set].map((v) => v.split(",").map((v) => +v))
}

console.log(fourSum([0, 0, 0, 0], 0))
/* 
示例 1：
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

示例 2：
输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
 

提示：

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
