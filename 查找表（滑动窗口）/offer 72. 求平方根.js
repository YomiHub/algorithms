//剑指 Offer II 072. 求平方根（整数）
//给定一个非负整数 x ，计算并返回 x 的平方根，即实现 int sqrt(int x) 函数。
//正数的平方根有两个，只输出其中的正数平方根。
//如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。

function mySqrt(num) {
  let left = 0,
    right = num,
    ans = -1

  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    let res = mid * mid

    if (res <= num) {
      ans = mid
      left = mid + 1
    } else if (res > num) {
      right = mid - 1
    }
  }
  return ans
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