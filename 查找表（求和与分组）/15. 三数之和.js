//-----------------------------------------------------------------
//三数之和
//给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。注意：答案中不可以包含重复的三元组。

//超时：311 / 313 个通过测试用例
var threeSum = function (nums) {
  if (nums.length < 3) {
    return []
  }
  let res = []
  let key = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let index = nums.indexOf(-(nums[i] + nums[j]), j + 1)
      if (index != -1) {
        let temp = [nums[i], nums[j], nums[index]].sort((a, b) => {
          return a - b
        })
        let str = temp.join("")
        if (!key.hasOwnProperty(str)) {
          key[str] = 1
          res.push(temp)
        }
      }
    }
  }
  return res
}

//双指针

//执行用时 :196 ms, 在所有 javascript 提交中击败了68.70%的用户
//内存消耗 :46.8 MB, 在所有 javascript 提交中击败了57.55%的用户
var threeSum = function (nums) {
  if (!nums || nums.length < 3) return []
  nums.sort((a, b) => {
    return a - b
  })

  let res = []
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1
    let r = nums.length - 1

    //去重
    if (i > 0 && nums[i] === nums[i - 1]) continue

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        res.push([nums[i], nums[l], nums[r]])
        while (nums[l] === nums[l + 1]) l++
        while (nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

/* 
示例 2：
输入：nums = []
输出：[]

示例 3：
输入：nums = [0]
输出：[]
 

提示：

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
