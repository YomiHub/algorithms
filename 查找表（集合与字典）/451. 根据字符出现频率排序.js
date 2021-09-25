//-----------------------------------------------------------------
//根据字符出现频率排序
//给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

//执行用时 :100 ms, 在所有 javascript 提交中击败了40.40%的用户
//内存消耗 :44.6 MB, 在所有 javascript 提交中击败了10.81%的用户
var frequencySort = function (s) {
  var calTimes = {}
  for (let str of s) {
    if (!calTimes.hasOwnProperty(str)) {
      calTimes[str] = 1
    } else {
      calTimes[str]++
    }
  }

  var sortStr = sortObj(calTimes)
  var res = ""
  sortStr.forEach((key) => {
    while (calTimes[key] > 0) {
      res += key
      calTimes[key]--
    }
  })
  return res
}

function sortObj(obj) {
  return Object.keys(obj).sort((a, b) => {
    return obj[b] - obj[a]
  })
}

console.log(frequencySort("cccaaa"))

//map
//执行用时 :76 ms, 在所有 javascript 提交中击败了96.69%的用户
//内存消耗 :38.4 MB, 在所有 javascript 提交中击败了54.05%的用户
var frequencySort = function (str) {
  let map = new Map()
  let result = ""
  str.split("").forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  map = [...map]
    .sort((a, b) => b[1] - a[1])
    .map((item) => {
      result += item[0].repeat(item[1])
    })
  return result
}

//执行用时 :136 ms, 在所有 javascript 提交中击败了7.28%的用户
//内存消耗 :44 MB, 在所有 javascript 提交中击败了24.32%的用户
var frequencySort = function (s) {
  const sArr = [...s]
  const record = new Map()

  sArr.forEach((value) => {
    record.set(value, (record.get(value) || 0) + 1)
  })
  return sArr
    .sort((a, b) =>
      record.get(b) == record.get(a)
        ? a.charCodeAt(0) - b.charCodeAt(0)
        : record.get(b) - record.get(a)
    )
    .join("")
}

/* 
示例 2:
输入:
"cccaaa"

输出:
"cccaaa"

解释:
'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。


示例 3:
输入:
"Aabb"

输出:
"bbAa"

解释:
此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-characters-by-frequency
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
