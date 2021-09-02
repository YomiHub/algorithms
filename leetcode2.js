//!无重复字符的最长子串:给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
//维护数组：使用一个数组来维护滑动窗口 时间复杂度：O(n<sup>2</sup>)
//循环字符，将唯一的字符放入数组，非唯一时，移除包括重复字符之前的所有字符，接着比较数组长度与最长的长度
/* var lengthOfLongestSubstring = function(s) {
  let arr = [], max=0;  //需要比较大小，先设置max默认为0
  for(let i = 0; i<s.length; i++){
    let index = arr.indexOf(s[i]); //前面是否已经出现过该字符
    if(index!==-1){
      arr.splice(0,index+1);  //已经出现重复字符，移除前面的元素
    }
    arr.push(s.charAt(i)); //将遍历的字符放入数组
    max = Math.max(arr.length,max);
  }
  return max;
}; */

//维护下标： 使用下标来维护滑动窗口（将上述的数组长度变为两个下标变量的差值） 时间复杂度：O(n<sup>2</sup>)
/* var lengthOfLongestSubstring = function(s) {
  let index = 0, max = 0;
  for(let i = 0,j = 0; j<s.length; j++){
    index = s.substring(i,j).indexOf(s[j]);

    if(index!==-1){
      i = i+index+1;  //移到重复元素的下一个元素
    }
    max = Math.max(max,j-i+1)
  }
  return max;
} */

//结合Map优化时间复杂度：O(n)
var lengthOfLongestSubstring = function(s){
  let map = new Map(),max = 0;
  for(let i = 0,j = 0; j<s.length; j++){
    if(map.has(s[j])){
      //已经存在元素，则将无重复子串开始下标重置为相同字符的下一个位置
       i = Math.max(map.get(s[j])+1,i);  //注意该重复下标是比当前i大的情况
    }
    max = Math.max(j-i+1,max);
    map.set(s[j],j);
  }
  return max;
}

var testStr = 'pwwkew';
console.log(lengthOfLongestSubstring(testStr))  //3
