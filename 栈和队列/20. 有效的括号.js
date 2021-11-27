// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 1、左括号必须用相同类型的右括号闭合。2、左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
  let slen = s.length
  if (slen % 2 !== 0) return false

  // 用于判断是否匹配
  let match = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  let lastIndex = -1
  let stack = []
  for (let i = 0; i < slen; ++i) {
    let item = s[i]
    if (lastIndex != -1 && item == match[stack[lastIndex]]) {
      stack.pop()
      lastIndex--
    } else {
      stack.push(item)
      lastIndex++
    }
  }
  return stack.length > 0 ? false : true
}

//推荐解法：如果进来的是右边符号，就查看栈顶是否匹配

var isValid = function (s) {
  let slen = s.length
  if (slen % 2 !== 0) return false

  let stack = [];
  let match = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  for(let i = 0; i<slen; ++i){
    let item = s[i];
    if(!match[item]){
      //左匹配符号
      stack.push(item);
    }else{
      if(stack.length==0||match[item]!=stack.pop()){
        return false;
      }
    }
  }
  return stack.length>0?false:true;
}

console.log(isValid("()[]{}"))

/* 
示例 2：
输入：s = "()[]{}"
输出：true

示例 4：
输入：s = "([)]"
输出：false

提示：1 <= s.length <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
