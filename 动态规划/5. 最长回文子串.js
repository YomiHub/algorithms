/**
 * @param {string} s
 * @return {string}
 */
//动态规划 dp存储dp[i，j]是否是回文字符串（当i，j是回文时，向左右加一个相等字符，则仍然是回文，另外i，i本身就是回文）
var longestPalindrome = function (s) {
  let len = s.length
  if (s==null||len == 1) return s;
  let maxLen = 1;
  let begin = 0;
  let dp = new Array(len).fill(0).map(()=>{return new Array(len).fill(false)});
  for(let i = 0; i<len; i++){
    dp[i][i] = true;
  }

  for(let L = 2; L<=len; L++){
    //枚举左边界
    for(let i = 0; i<len; i++){
      //L = j-1+1;
      let j = L+i-1;
      if(j>=len){
        break;
      }
      if(s[i]!=s[j]){
        dp[i][j] = false;
      }else{
        if(j-i<3){
          //中间只有一个数时，肯定是回文
          dp[i][j] = true;
        }else{
          //从长度较短的字符串向长度较长的字符串进行转移的
          dp[i][j] = dp[i+1][j-1]
        }
      }

      // [i][j] 是回文，且大于之前的记录，此时记录回文长度和起始位置
      if(dp[i][j]&&j-i+1>maxLen){
        maxLen = j-i+1;
        begin = i;
      }
    }
  }
  return s.substr(begin,maxLen);
}

//【双指针从中心向两边扩展，寻找最大值】区分奇数和偶数个情况
var expandAroundCenter = function(s,left,right){
  while(left>=0&&right<s.length&&s[left]==s[right]){
    left--;
    right++; //向两边扩展
  }
  return right-left-1;
}

var longestPalindrome = function (s) {
  let len = s.length
  if (s==null||len == 1) return s
  let start = 0;end = 0;
  for(let i = 0; i<len; ++i){
    let len1 = expandAroundCenter(s,i,i);  //奇数对称的情况
    let len2 = expandAroundCenter(s,i,i+1);  //偶数对称的情况
    let len = Math.max(len1,len2);
    if(len>end-start){
      start = i-Math.floor((len-1)/2);
      end = i+Math.floor(len/2)
    }
  }
  return s.substring(start,end+1);
}
console.log(longestPalindrome("babad"))
