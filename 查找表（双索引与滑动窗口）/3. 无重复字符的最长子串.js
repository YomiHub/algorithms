//-----------------------------------------------------------------
//无重复字符的最长子串:给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度

//维护数组：使用一个数组来维护滑动窗口 时间复杂度：O(n<sup>2</sup>)
//循环字符，将唯一的字符放入数组，非唯一时，移除包括重复字符之前的所有字符，接着比较数组长度与最长的长度
var lengthOfLongestSubstring = function (s) {
  let arr = [],
    max = 0 //需要比较大小，先设置max默认为0
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]) //前面是否已经出现过该字符
    if (index !== -1) {
      arr.splice(0, index + 1) //已经出现重复字符，移除前面的元素
    }
    arr.push(s.charAt(i)) //将遍历的字符放入数组
    max = Math.max(arr.length, max)
  }
  return max
}

//维护下标： 使用下标来维护滑动窗口（将上述的数组长度变为两个下标变量的差值） 时间复杂度：O(n<sup>2</sup>)
var lengthOfLongestSubstring = function (s) {
  let index = 0,
    max = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    index = s.substring(i, j).indexOf(s[j])

    if (index !== -1) {
      i = i + index + 1 //移到重复元素的下一个元素
    }
    max = Math.max(max, j - i + 1)
  }
  return max
}

//结合Map优化时间复杂度：O(n)
var lengthOfLongestSubstring = function (s) {
  let map = new Map(),
    max = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      //已经存在元素，则将无重复子串开始下标重置为相同字符的下一个位置
      i = Math.max(map.get(s[j]) + 1, i) //注意该重复下标是比当前i大的情况
    }
    max = Math.max(j - i + 1, max)
    map.set(s[j], j)
  }
  return max
}

// 推荐解法：滑动窗口
// 定义left和right形成一个窗口，保证窗口中不出现重复字符
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let n = s.length;
  let left = 0;
  let right = -1;
  let freqMap = {};  //用于记录子串元素出现的频率

  while(left<n){
    let nextLetter = s[right+1];
    if(!freqMap[nextLetter]&&nextLetter!=undefined){
      //没有在子串重复
      freqMap[nextLetter] = 1;
      right++;
    }else{
      freqMap[s[left]] = 0;
      left++;
    }

    max = Math.max(max,right-left+1)
  }
  return max;
}

var testStr = "pwwkew"
console.log(lengthOfLongestSubstring(testStr)) //3

/* 
示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例 4:
输入: s = ""
输出: 0
 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
