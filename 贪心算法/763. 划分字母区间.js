// 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

// 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

// 返回一个表示每个字符串片段的长度的列表。
/**
 * @param {string} s
 * @return {number[]}
 */
// 由于同一个字母只能出现在同一个片段，显然同一个字母的第一次出现的下标位置和最后一次出现的下标位置必须出现在同一个片段
// 寻找每个片段可能的最小结束下标： 保证每个片段的长度一定是符合要求的最短长度
// 第一次遍历时记录每个字母最后一次出现的下标位置，第二次遍历时进行字符串的划分。
var partitionLabels = function (s) {
  let lastMap = new Array(26)
  const len = s.length
  const codePointA = "a".codePointAt(0)

  for (let i = 0; i < len; ++i) {
    lastMap[s.codePointAt(i) - codePointA] = i
  }

  const result = []
  let start = (end = 0)
  for (let i = 0; i < len; ++i) {
    end = Math.max(end, lastMap[s.codePointAt(i) - codePointA])
    if (i === end) {
      result.push(end - start + 1)
      start = end + 1
    }
  }
  return result
}

/* 
示例 1：
输入：s = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。 
示例 2：

输入：s = "eccbbbbdec"
输出：[10]
 

提示：

1 <= s.length <= 500
s 仅由小写英文字母组成
 */
