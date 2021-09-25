//-----------------------------------------------------------------
//同构字符串
//如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
//所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身

var isIsomorphic = function (s, t) {
  var sArr = s.split("")
  var record = {}
  if (s.length != t.length) {
    return false
  }
  for (let item of t) {
    let oldStr = sArr.shift()
    if (item !== oldStr) {
      if (record.hasOwnProperty(oldStr)) {
        return false
      }
      sArr = repalaceStr(sArr, oldStr, item)
      record[item] = 1
    }
  }
  return true
}

function repalaceStr(arr, oldStr, newStr) {
  while (arr.includes(oldStr)) {
    arr.splice(arr.indexOf(oldStr), 1, newStr)
  }
  return arr
}

//执行用时 :60 ms, 在所有 javascript 提交中击败了99.19%的用户
//内存消耗 :35.3 MB, 在所有 javascript 提交中击败了66.33%的用户
var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
      return false
    }
  }
  return true
}

//哈希
//执行用时 :72 ms, 在所有 javascript 提交中击败了81.91%的用户
//内存消耗 :35.2 MB, 在所有 javascript 提交中击败了74.49%的用户
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false
  let hashOne = {},
    hashTwo = {},
    len = s.length
  for (let i = 0; i < len; i++) {
    let a = s[i],
      b = t[i]
    if (!hashOne[a] && !hashTwo[b]) {
      hashOne[a] = b
      hashTwo[b] = a
    } else if (hashOne[a] !== b || hashTwo[b] !== a) {
      return false
    }
  }
  return true
}

//执行用时 :80 ms, 在所有 javascript 提交中击败了54.02%的用户
//内存消耗 :35.8 MB, 在所有 javascript 提交中击败了48.98%的用户
var isIsomorphic = function (s, t) {
  //同构则说明能相互转化
  var map = new Map()
  var map2 = new Map()
  for (var i = 0; i < s.length; i++) {
    map.set(s[i], t[i])
    map2.set(t[i], s[i])
  }
  for (var j = 0; j < s.length; j++) {
    if (map.get(s[j]) !== t[j]) {
      return false
    }
    if (map2.get(t[j]) !== s[j]) {
      return false
    }
  }
  return true
}

//数组
//执行用时 :68 ms, 在所有 javascript 提交中击败了89.95%的用户
//内存消耗 :35.7 MB, 在所有 javascript 提交中击败了51.02%的用户
var isIsomorphic = function (s, t) {
  var a = [],
    l = []
  if (s.length == 0) {
    return true
  }
  for (var i = 0; i < s.length; i++) {
    if (s[i] in a) {
      if (a[s[i]] !== t[i]) {
        //已经替换过的情况下，被替换字符与替换字符唯一对应
        return false
      }
    } else {
      if (l.indexOf(t[i]) !== -1) {
        //替换字符唯一
        return false
      }
      a[s[i]] = t[i]
      l.push(t[i])
    }
  }
  return true
}
console.log(isIsomorphic("paper", "title"))

/* 示例 2：

输入：s = "foo", t = "bar"
输出：false
示例 3：

输入：s = "paper", t = "title"
输出：true
 

提示：

可以假设 s 和 t 长度相同。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/isomorphic-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
