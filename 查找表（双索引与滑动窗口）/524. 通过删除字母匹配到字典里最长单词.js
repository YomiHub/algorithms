// 给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。
// 如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
   //可以通过删除 s 中的某些字符得到，所以从前往后匹配时，每次贪心地匹配最靠前的字符是最优决策
   let res = "";
   for(const letter of dictionary){
     let i = 0,j = 0;
     while(i<letter.length&&j<s.length){
       if(letter[i]==s[j]){
         i++;  //可以删除对应s位置的字符
       }
       j++; //查找s中下一个符合的字符
     }

     if(i===letter.length){
       //能匹配到字符串终点
       if(letter.length>res.length||(letter.length==res.length&&letter<res)){
         res = letter;
       }
     }
   }
   return res;
};

/* 
示例 1：
输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
输出："apple"


提示：
1 <= s.length <= 1000
1 <= dictionary.length <= 1000
1 <= dictionary[i].length <= 1000
s 和 dictionary[i] 仅由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */