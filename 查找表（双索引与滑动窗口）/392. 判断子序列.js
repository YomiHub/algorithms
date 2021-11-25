//给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
//字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  let sLen = s.length;
  if(!sLen){
    return true;
  }

  let i = 0;
  for(let j = 0; j<t.length; ++j){
    if(i<sLen){
      if(s[i]==t[j]){
        ++i;
        if(i==sLen){
          //匹配到结尾
          return true;
        }
      }
    }
  }
  return false;
};
/* 
进阶：
如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

示例 2：
输入：s = "axc", t = "ahbgdc"
输出：false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */