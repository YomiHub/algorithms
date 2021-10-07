// 反转字符串中的元音字母:给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

// 双撞指针
// const reg = {a:1,e:1,i:1,o:1,u:1};
const isVowel = (s) => ["a", "e", "i", "o", "u"].includes(s.toLowerCase());

var reverseVowels = function(s) {
  let i = 0,j= s.length-1,arr=s.split("");
  while(i<j){
    //或者!reg[arr[i].toLowerCase()]
    while(i<j&&!isVowel(arr[i])){
      ++i;
    }
    //取 !reg[arr[j].toLowerCase()]
    while(i<j&&!isVowel(arr[j])){
      --j;
    }

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    ++i;
    --j;
  }
  return arr.join("");
};

console.log(reverseVowels("leetcode"))

/* 
示例 1：
输入：s = "hello"
输出："holle"

示例 2：
输入：s = "leetcode"
输出："leotcede"
 

提示：
1 <= s.length <= 3 * 105
s 由 可打印的 ASCII 字符组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */