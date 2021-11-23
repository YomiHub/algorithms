// 给定两个字符串 s 和 t，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

//计数
var findTheDifference = function(s, t) {
  let strDict = {};

  for(let i = 0; i<s.length; ++i){
    let word = s[i];
    if(strDict[word]){
      strDict[word]++;
    }else{
      strDict[word] = 1;
    }
  }

  for(let i = 0; i<t.length; ++i){
    let word = t[i];
    if(!strDict[word]){
      return word;
    }else{
     strDict[word]--;
    }
  }
  return ""
};

//推荐求和：将字符串 s 中每个字符的 ASCII 码的值求和，与t求和的差值即为添加字母的ASCII
var findTheDifference = function(s, t) {
 let as = 0, at = 0;
 for (let i = 0; i < s.length; i++) {
     as += s[i].charCodeAt();
 }
 for (let i = 0; i < t.length; i++) {
     at += t[i].charCodeAt();
 }
 return String.fromCharCode(at - as);
};

let s = "abcd", t = "abcde";
console.log(findTheDifference(s,t));


/* 
输入：s = "ae", t = "aea"
输出："a"
 

提示：
0 <= s.length <= 1000
t.length == s.length + 1
s 和 t 只包含小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-the-difference
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */