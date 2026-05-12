// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

/**
 * @param {string} s
 * @return {number}
 */
// 如果一开始栈为空，第一个字符为左括号的时候我们会将其放入栈中，这样就不满足提及的「最后一个没有被匹配的右括号的下标」，为了保持统一，我们在一开始的时候往栈中放入一个值为 −1 的元素
var longestValidParentheses = function (s) {
  const stack = []
  let maxRes = 0
  stack.push(-1) // 兼容没有没被匹配的右括号时

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "(") {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        maxRes = Math.max(maxRes, i - stack[stack.length - 1])
      }
    }
  }
  return maxRes
}

/* 
示例 1：
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"

示例 2：
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"

示例 3：
输入：s = ""
输出：0
 

提示：

0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')' */
