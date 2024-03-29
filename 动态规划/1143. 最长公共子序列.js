// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
var longestCommonSubsequence = function(text1, text2) {
  let len1 = text1.length;
  let len2 = text2.length;

  //当一个字符串为空，则公共前缀最长为0
  let dp = new Array(len1+1).fill(0).map(()=>{return new Array(len2+1).fill(0)}); 
  for(let i = 1; i <= len1; ++i){
    let target = text1[i-1];
    for(let j = 1; j<=len2; ++j){
      if(text2[j-1]==target){
        dp[i][j] = dp[i-1][j-1]+1;     //字符相等时，长度为i、长度为j 的公共子序+1
      }else{
        dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])  //不相等时取任一字符串的前一个公共子序最大值
      }
    }
  }
  return dp[len1][len2];
};

console.log(longestCommonSubsequence("abcde","ace"))
/* 示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */