// 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。

// 如果存在一个整数 x 使得 n == 2^x ，则认为 n 是 2 的幂次方。
/**
 * @param {number} n
 * @return {boolean}
 */
// 2的幂次方用二进制表示时，只有一个1，所以去掉低位的1之后就是全0
var isPowerOfTwo = function(n){
  return n>0&&(n&(n-1)) === 0;
}

//不断取mod，判断最后是否有余数（整数包括正整数、负整数和0）
var isPowerOfTwo = function(n) {
  if(n<=0) return false;  // 2 的幂次方是在y轴上方，不可能为0
  if(n==1) return true;
  if(n<1){
    //此情况是不存在的，n不是整数：2^-1=1/2、2^-2=1/4
    while(n<1){
      n= n*2;
    }
  }else{
    while(n%2==0){
      n= n/2;
    }
  }
  
  return n==1;
};

//取巧排除不存在的情况
var isPowerOfTwo = function(n) {
  if (n < 1) return false;
  while (n!=1){
      if (n%2 == 1) return false;
      n = n/2;
  }
  return true;
};


/*
 示例 5：
输入：n = 5
输出：false
 

提示：
-2^31 <= n <= 2^31 - 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/power-of-two
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */