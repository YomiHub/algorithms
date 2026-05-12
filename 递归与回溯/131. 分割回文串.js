// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串(对称，向前和前后读一样) 。返回 s 所有可能的分割方案。

/**
 * @param {string} s
 * @return {string[][]}
 */
// 1、回溯+动态规划： 搜索回溯枚举分割方法 + 动态规划存储回文串
var partition = function (s) {
  const len = s.length
  const record = new Array(len).fill(0).map(() => new Array(len).fill(true))
  const result = [],
    answer = []

  const dfs = (index) => {
    if (index === len) {
      result.push(answer.slice())
      return
    }

    for (let j = index; j < len; ++j) {
      if (record[index][j]) {
        answer.push(s.slice(index, j + 1))
        dfs(j + 1)
        answer.pop()
      }
    }
  }

  for (let i = len - 1; i >= 0; --i) {
    for (let j = i + 1; j < len; ++j) {
      record[i][j] = s[i] === s[j] && record[i + 1][j - 1]
    }
  }

  dfs(0)
  return result
}

const testStr = "aab"
console.log(partition(testStr))

/* 
示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]

示例 2：
输入：s = "a"
输出：[["a"]]
 

提示：

1 <= s.length <= 16
s 仅由小写英文字母组成 
*/
