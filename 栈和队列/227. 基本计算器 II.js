// 227 没有括号的处理
// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
// 整数除法仅保留整数部分。
/**
 * @param {string} s
 * @return {number}
 */
 //【注意除法要去尾法取整，因为有正负数的情况不能向上或向下取整】
 var calculate = function (s) {
  s = s.trim() //去除空格
  let preSign = "+" //遇到符号的时候先保存，直到遇到数字再取出计算
  let num = 0 //用于将字符串数值转为number
  let len = s.length
  let stack = [];//存放计算的数值
  for (let i = 0; i < len; i++) {
    if (!isNaN(Number(s[i])) && s[i] != " ") {
      //取到完整的数值
      num = num * 10 + s[i].charCodeAt() - "0".charCodeAt()
    }

    //遇到符号或者结束了
    if(isNaN(Number(s[i]))||i===len-1){
      switch(preSign){
        case '+':
          stack.push(num);  
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop()*num);
          break;
        default:
          stack.push(parseInt((stack.pop()/num)));  //stack.pop()/num | 0 可以使用位运算 保留整数位
      }

      preSign = s[i];
      num = 0;
    }
  }
  let res = 0;
  while(stack.length){
    res+=stack.pop();
  }
  return res;
}
console.log(calculate("14-3/2"))

/* 示例 3：

输入：s = " 3+5 / 2 "
输出：5
 

提示：

1 <= s.length <= 3 * 105
s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
s 表示一个 有效表达式
表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
题目数据保证答案是一个 32-bit 整数

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/basic-calculator-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

// 224 需要处理括号的情况
// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  let res = 0;
  let len = s.length;
  let ops = [1]; //操作数的结果，当遇到括号时需要存储
  let sign = 1; //表示当前处理的正负数，用于表示上一次执行的是加还是减操作
  let i = 0;

  while(i<len){
    if(s[i]==' '){
      i++;
    }else if(s[i]=='+'){
      sign = ops[ops.length-1];
      i++;
    }else if(s[i]=='-'){
      sign = -ops[ops.length-1];  //遇到符号时，取出数字前的符号进行合并，如负负得正
      i++
    }else if(s[i] == "("){
      ops.push(sign); //存储括号前的符号
      i++;
    }else if(s[i] == ")"){
      ops.pop();  //计算完后移除
      i++;
    }else{
      let num = 0;
      while(i<len&&!(isNaN(Number(s[i])))&& s[i]!=' '){
        num = num*10+s[i].charCodeAt()-'0'.charCodeAt();
        i++;
      }
      res += sign*num; //添加正负号
    }
  }
  return res;
};

/* 示例 3：

输入：s = "(1+(4+5+2)-3)+(6+8)"
输出：23
 

提示：
1 <= s.length <= 3 * 105
s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
s 表示一个有效的表达式

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/basic-calculator
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */