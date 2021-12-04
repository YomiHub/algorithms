// 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 暴力的思路：BFS或者DFS每次对每个字母进行删除、插入、替换的操作

// DP[i][j]  单词1的前i个字符替换单词2的前j个字符  需要的最少操作数
// 本身相等不需要操作，否则Min(DP[i-1][j],DP[i,j-1],DP[i-1][j-1])+1   即删除、插入、替换
var minDistance = function (word1, word2) {
  let leftLen = word1.length
  let rightLen = word2.length
  let dp = new Array(leftLen + 1).fill(0).map(() => {
    return new Array(rightLen + 1).fill(0)
  })

  //初始单词的操作次数（有一方为0空的时候，则另一方要全部删除，操作次数为i和 j）
  for (let i = 0; i < leftLen+1; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j < rightLen+1; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i < leftLen + 1; ++i) {
    for (let j = 1; j < rightLen + 1; ++j) {
      if(word1[i-1]==word2[j-1]){
        //单词位相等，不需要操作
        dp[i][j] = dp[i-1][j-1];
      }else{
        dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1; //删除插入替换
      }
    }
  }
  return dp[leftLen][rightLen]
}

console.log(minDistance("","a"));
/* 
示例 2：
输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
 

提示：
0 <= word1.length, word2.length <= 500
word1 和 word2 由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/edit-distance
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
