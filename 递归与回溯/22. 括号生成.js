// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 有效括号组合需满足：左括号必须以正确的顺序闭合

/**
 * @param {number} n
 * @return {string[]}
 */
//回溯
var generateParenthesis = function (n) {
  let backtrack = (n,s,left,right)=>{
    //左右括号都放完了
    if(s.length == 2*n){
      this.res.push(s.join(''));
      return;
    }

    if(left<n){
      s.push("(");
      backtrack(n,s,left+1,right);
      s.pop();
    }

    if(right<n){
      s.push(")");
      backtrack(n,s,left,right);
      s.pop();
    }
  }

  this.res = [];
  backtrack(n,[],0,0)
  return this.res;
}


//剪枝法： 一共有2n个符号位，每个位置可以放左括号 ( 或者右括号 )，且左右括号的数量<=n
var generateParenthesis = function (n) {
  //left和right表示已使用的数量，同理也可以用未使用过的数量来解
  let dfs = (left, right, n, res) => {
    if (left == n && right == n) {
      //括号放完了
      this.list.push(res)
      return
    }

    if (left < n) {
      dfs(left + 1, right, n, res + "(")
    }
    if (left > right && right < n) {
      dfs(left, right + 1, n, res + ")")
    }
  }

  this.list = []; 
  dfs(0,0,n,"");
  return this.list;
}

/* 示例 1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：
输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
