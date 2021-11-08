// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function (s, p) {
  let beginIndex = []

  let targetMap = makeCountMap(p) //统计每个字符出现的次数
  let slen = s.length
  let plen = p.length
  let left = 0
  let right = plen - 1
  let windowMap = makeCountMap(s.substring(left, right + 1))

  while (left <= slen - plen && right < slen) {
    let compareRes = compareMap(windowMap, targetMap)
    if (compareRes) {
      beginIndex.push(left)
    }
    windowMap[s[left]]--
    left++;
    right++;
    addCountToMap(windowMap, s[right])
  }
  return beginIndex
}

function compareMap(windowMap, targetMap) {
  let targetKeys = Object.keys(targetMap)
  for (let targetKey of targetKeys) {
    let count = windowMap[targetKey]
    if (!count || count !== targetMap[targetKey]) {
      return false
    }
  }
  return true
}

function addCountToMap(map, str) {
  if (!map[str]) {
    map[str] = 1
  } else {
    map[str]++
  }
}

function makeCountMap(strs) {
  let map = {}
  for (let i = 0; i < strs.length; ++i) {
    let str = strs[i]
    addCountToMap(map, str)
  }
  return map;
}


console.log(findAnagrams("cbaebabacd","abc"))
/* 
示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 

提示:

1 <= s.length, p.length <= 3 * 104
s 和 p 仅包含小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
