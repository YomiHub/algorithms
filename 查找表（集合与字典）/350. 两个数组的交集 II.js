//-----------------------------------------------------------------
//两个数组的交集: 给定两个数组，编写一个函数来计算它们的交集。

// 执行用时 :68 ms, 在所有 javascript 提交中击败了82.19%的用户
// 内存消耗 :36 MB, 在所有 javascript 提交中击败了12.23%的用户
var intersect = function (nums1, nums2) {
  var obj1 = arrChange(nums1)
  var obj2 = arrChange(nums2)
  var res = []
  for (var pro in obj1) {
    if (obj2.hasOwnProperty(pro)) {
      obj1[pro].length < obj2[pro].length
        ? res.push(...obj1[pro])
        : res.push(...obj2[pro])
    }
  }
  return res
}

function arrChange(arr) {
  var obj = {}
  arr.forEach((item, index) => {
    if (obj.hasOwnProperty(item)) {
      obj[arr[index]].push(item)
    } else {
      obj[arr[index]] = [item]
    }
  })
  return obj
}

//执行用时 :76 ms, 在所有 javascript 提交中击败了52.47%的用户
//内存消耗 :34.7 MB, 在所有 javascript 提交中击败了50.79%的用户
var intersect = function (nums1, nums2) {
  var len1 = nums1.length
  var len2 = nums2.length
  if (len1 === 0 || len2 === 0) {
    return []
  }

  var dict1 = {}
  var result = []
  nums1.forEach((item, index) => {
    if (dict1.hasOwnProperty(item)) {
      dict1[item] += 1
    } else {
      dict1[item] = 1
    }
  })

  nums2.forEach((item) => {
    if (dict1.hasOwnProperty(item) && dict1[item] > 0) {
      result.push(item)
      dict1[item] -= 1
    }
  })

  return result
}

//执行用时 :72 ms, 在所有 javascript 提交中击败了66.52%的用户
//内存消耗 :33.9 MB, 在所有 javascript 提交中击败了72.60%的用户
var intersect = function (nums1, nums2) {
  return nums1.filter(
    (el) => nums2.includes(el) && nums2.splice(nums2.indexOf(el), 1)
  )
}

//执行用时 :64 ms, 在所有 javascript 提交中击败了91.85%的用户
//内存消耗 :33.8 MB, 在所有 javascript 提交中击败了86.17%的用户
var intersect = function (nums1, nums2) {
  var res = []
  //包含之后再清除
  for (var i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      res.push(nums1[i])
      nums2.splice(nums2.indexOf(nums1[i]), 1)
    }
  }
  return res
}
console.log(intersect([1, 2, 2, 1], [2, 2]))

/* 说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

进阶：
如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
