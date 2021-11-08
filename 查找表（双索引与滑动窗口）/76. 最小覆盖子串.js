// 给你一个字符串 s 、一个字符串 t 。
// 返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""

// 解法提示：窗口左边界达到“给定字符s长度-目标字符t长度”，此时无论是否匹配，都是最短能满足的情况
// 窗口右边界大于给定字符s的长度，但还没有覆盖，则继续滑动也一样无结果
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
  // 统计t中每个字符出现的次数
  let targetMap = makeCountMap(t)

  let slen = s.length
  let tlen = t.length
  let left = 0
  let right = -1
  let countMap = {} //当前窗口子串中 每个字符出现的次数
  let min = "" //当前计算的最小子串

  while (left <= slen - tlen && right <= slen) {
    // 比对map中字符出现的次数是否满足条件
    let isValid = true
    Object.keys(targetMap).forEach((key) => {
      let count = countMap[key]
      if (!count || count < targetMap[key]) {
        isValid = false
      }
    })

    // 子串满足的话，左边界右移
    if (isValid) {
      let currentLen = right - left + 1
      if (currentLen < min.length || min == "") {
        min = s.substring(left, right + 1)
      }

      countMap[s[left]]--
      left++
    } else {
      addCountToMap(countMap, s[right + 1])
      right++
    }
  }

  return min
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

  return map
}

console.log(minWindow("abc","b"));
/* 
示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"

提示：
  对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
  如果 s 中存在这样的子串，我们保证它是唯一的答案。
  1 <= s.length, t.length <= 105
  s 和 t 由英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-window-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
