// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 动态规划 dp[i]=dp[j] && check(s[j..i−1])
// dp[i] 表示字符串 s 前 i 个字符能否被分割为字典的单词；check(s[j..i−1]) 表示子串 s[j..i−1] 是否出现在字典中
var wordBreak = function (s, wordDict) {
  const len = s.length
  const wordDictSet = new Set(wordDict)
  const dp = new Array(len + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= len; ++i) {
    for (let j = 0; j < i; ++j) {
      if (dp[j] && wordDictSet.has(s.substring(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[len]
}

/* 
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。

提示：

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s 和 wordDict[i] 仅由小写英文字母组成
wordDict 中的所有字符串 互不相同
 */
