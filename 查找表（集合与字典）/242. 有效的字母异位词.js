//-----------------------------------------------------------------
//有效的字母异位词:给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词
//注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

//执行用时 :88 ms, 在所有 javascript 提交中击败了68.61%的用户
//内存消耗 :38.2 MB, 在所有 javascript 提交中击败了39.81%的用户

//字典对各个字符出现的次数进行统计
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false
  }

  var calT = cal(t)
  for (var ele of s) {
    if (!t.includes(ele) || calT[ele] == 0) {
      return false
    }
    calT[ele]--
  }
  return true
}

function cal(str) {
  var times = {}
  for (var ele of str) {
    if (times.hasOwnProperty(ele)) {
      times[ele]++
    } else {
      times[ele] = 1
    }
  }
  return times
}

//转换成数组排序后对比
//执行用时 :116 ms, 在所有 javascript 提交中击败了48.25%的用户
//内存消耗 :38.6 MB, 在所有 javascript 提交中击败了28.30%的用户
var isAnagram = function (s, t) {
  return (
    JSON.stringify(s.split("").sort()) === JSON.stringify(t.split("").sort())
  )
}

//执行用时 :132 ms, 在所有 javascript 提交中击败了26.88%的用户
//内存消耗 :38.1 MB, 在所有 javascript 提交中击败了43.10%的用户
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
}

var isAnagram = function (s, t) {
  const sort = (str) =>
    [...str].sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("")
  return sort(s) === sort(t) //如果输入字符串包含 unicode 字符
}

/* 
提示:
1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母
 

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-anagram
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
