//剑指 Offer II 072. 求平方根（整数）
//给定一个非负整数 x ，计算并返回 x 的平方根，即实现 int sqrt(int x) 函数。
//正数的平方根有两个，只输出其中的正数平方根。
//如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。

// 平方是单调递增，所以可以使用二分法求解
function mySqrt(num) {
  let left = 0,
    right = num,
    ans = -1

  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    let res = mid * mid  

    if (res <= num) {
      ans = mid
      left = mid + 1 //如果要保留精度就不需要取整和向上+1或-1
    } else if (res > num) {
      right = mid - 1
    }
  }
  return ans
}

//如果乘积超过最大整数，可以改用除法 if(mid<=num/mid)
function mySqrt(num) {
  //除法需要注意处理0的特殊情况
  if(num==0||num==1) return num;
  let left = 0,
    right = num,
    ans = -1

  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    if(mid==num/mid){
      return mid;
    } else if(mid<num/mid) {
      ans = mid
      left = mid + 1 
    } else{
      right = mid - 1
    }
  }
  return ans
}

//保留精度
function mySqrt(num) {
  if(num==0||num==1) return num;

  let left = 0,
    right = num,
    mid =(left + right) / 2,
    lastAns;

  do{
    let res = mid * mid;

    if(res==num){
      return mid;
    }else if (res < num) {
      left = mid
    } else{
      right = mid
    }
    lastAns = mid
    mid =(left + right) / 2
  }while(Math.abs(mid-lastAns)>=Number.EPSILON)  //Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差
  return mid
}

//解法二：牛顿迭代法（使用切线的根去逼近查找） x[n+1] = x[n]-f(x[n])/f(x[n])的导数
// x平方求导是2x，所以整理得到公式 x[n+1] = (x[n]+y/x[n])/2
function mySqrt(x) {
  let r = x;
  while (r*r>x){
    r = (r+x/r)/2
  }
  return r;
}

// console.log(mySqrt(4))

/* 
示例 2:
输入: x = 8
输出: 2
解释: 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2
 

提示:

0 <= x <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jJ0w9p
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */