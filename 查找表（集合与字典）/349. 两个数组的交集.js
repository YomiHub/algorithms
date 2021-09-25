//-----------------------------------------------------------------
//两个数组的交集:给定两个数组，编写一个函数来计算它们的交集

//执行用时 :72 ms, 在所有 javascript 提交中击败了57.01%的用户
//内存消耗 :33.7 MB, 在所有 javascript 提交中击败了93.20%的用户
var intersection = function (nums1, nums2) {
  var result = []
  nums1.forEach((item) => {
    if (nums2.includes(item) && !result.includes(item)) {
      result.push(item)
    }
  })

  return result
}

//执行用时 :56 ms, 在所有 javascript 提交中击败了99.29%的用户
//内存消耗 :34 MB, 在所有 javascript 提交中击败了71.43%的用户
var intersection = function (nums1, nums2) {
  const set = new Set()
  nums1.forEach((num1) => {
    if (nums2.includes(num1)) {
      set.add(num1)
    }
  })
  return [...set]
}

//执行用时 :56 ms, 在所有 javascript 提交中击败了99.29%的用户
//内存消耗 :34.7 MB, 在所有 javascript 提交中击败了40.82%的用户
var intersection = function (nums1, nums2) {
  nums1 = Array.from(new Set(nums1))
  let result = nums1.filter((item) => {
    return nums2.includes(item)
  })
  return result
}

//执行用时 :72 ms, 在所有 javascript 提交中击败了57.01%的用户
//内存消耗 :34.4 MB, 在所有 javascript 提交中击败了58.17%的用户
var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter((item) => nums2.includes(item)))]
}

//执行用时 :72 ms, 在所有 javascript 提交中击败了57.01%的用户
//内存消耗 :34.1 MB, 在所有 javascript 提交中击败了66.67%的用户
var intersection = function (nums1, nums2) {
  const set = new Set(nums1)
  return Array.from(new Set(nums2.filter((num) => set.has(num))))
}
console.log(intersection(arr1, arr2))

/* 示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
