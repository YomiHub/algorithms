// 给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。
// 若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串
/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
  words.sort((a,b)=>{
    //先按长度
    let diff = b.length-a.length;
    if(diff!==0){
      return diff;
    }else{
      return a<b?-1:1; //按字典序排
    }
  })

  words = Array.from(new Set(words)); //去重
  for(let i = 0; i<words.length; ++i){
    let word = words[i];
    res = words.slice(0,i).concat(words.slice(i+1)); //除去当前单词后剩余的单词
    //检查当前单词是否能由剩下的单词组成
    if(wordBreak(word,res)){
      return word;
    }
  }
  return "";
};

// 单词拆分的动态规划思路
function wordBreak(str,wordDict){
 let len = str.length;
 if(!len) return;

 let wordSet = new Set(wordDict);
 let dp = [];
 dp[0] = true;

 for(let i = 0;i<=len; ++i){
   for(let j = i; j>=0; --j){
     let word = str.slice(j,i);
     if(wordSet.has(word)&&dp[j]){
       dp[i] = true;
       break;
     }
   }
 }

 return !!dp[len];
}

/* 示例：
输入： ["cat","banana","dog","nana","walk","walker","dogwalker"]
输出： "dogwalker"
解释： "dogwalker"可由"dog"和"walker"组成。
提示：

0 <= len(words) <= 200
1 <= len(words[i]) <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-word-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */