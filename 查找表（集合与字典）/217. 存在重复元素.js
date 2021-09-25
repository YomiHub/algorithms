//-----------------------------------------------------------------
//存在重复元素
//给定一个整数数组，判断是否存在重复元素。如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false

//执行用时 :68 ms, 在所有 javascript 提交中击败了95.59%的用户
//内存消耗 :40.6 MB, 在所有 javascript 提交中击败了41.49%的用户
var containsDuplicate = function (nums) {
  var arrSet = new Set()
  var res = false
  nums.forEach((item) => {
    if (arrSet.has(item)) {
      res = true
    }
    arrSet.add(item)
  })
  return res
}

//执行用时 :76 ms, 在所有 javascript 提交中击败了84.89%的用户
//内存消耗 :42.1 MB, 在所有 javascript 提交中击败了34.27%的用户
var containsDuplicate = function (nums) {
  let obj = {}
  for (let i = 0, length = nums.length; i < length; i++) {
    if (obj[nums[i]]) return true
    obj[nums[i]] = true
  }
  return false
}

var containsDuplicate = function (nums) {
  //执行用时 :84 ms, 在所有 javascript 提交中击败了68.49%的用户
  //内存消耗 :40 MB, 在所有 javascript 提交中击败了47.61%的用户
  return nums.length > new Set(nums).size //return [...new Set(nums)].length!=nums.length;

  //执行用时 :72 ms, 在所有 javascript 提交中击败了90.89%的用户
  //内存消耗 :42 MB, 在所有 javascript 提交中击败了36.72%的用户
  // const map = new Map()
  // nums.forEach((item, key) => map.set(item, key))
  // return map.size !== nums.length
}

//先排序再比较相邻元素
var containsDuplicate = function (nums) {
  const len = nums.length
  if (len < 2) {
    return false
  }

  nums.sort((a, b) => {
    return a - b
  })

  for (let i = 0; i < len; i++) {
    if (nums[i] == nums[i + 1]) {
      return true
    }
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 4]))
/* 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
