// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function (tokens) {
  //注意a与b顺序，栈中先进后出
  let calMap = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => parseInt(b / a, 10),
  }
  let stack = []

  for (let item of tokens) {
    let fun = calMap[item]

    // 遇到运算符的时候就出栈进行运算
    if (fun) {
      let a = parseInt(stack.pop())
      let b = parseInt(stack.pop())
      stack.push(fun(a, b)) //运算结果入栈
    } else {
      stack.push(item)
    }
  }
  return stack.pop()
}

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
) //22

/* 示例 1：

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
