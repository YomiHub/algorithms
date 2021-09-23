//-----------------------------------------------------------------
//实现 pow(x, n) ，即计算 x 的 n 次幂函数。

//方法一：递归快速幂算法
var myPow = function (x, n) {
  const fastPow = (x, n) => {
    if (n == 1) {
      return x
    }
    let val = n % 2 === 0 ? fastPow(x, n / 2) : fastPow(x, (n - 1) / 2)
    return n % 2 === 0 ? val * val : val * val * x
  }

  if (x === 1 || n === 0) {
    return 1
  }

  return n < 0 ? 1 / fastPow(x, Math.abs(n)) : fastPow(x, n)
}

//方法二：分治、递归
var myPow = function (x, n) {
  //临界条件
  if (n === 0) return 1
  if (x === 0) return 0
  if (n < 0) return 1 / myPow(x, -n)
  //n为奇数
  if (n % 2) return x * myPow(x, n - 1)
  //n为偶数
  return myPow(x * x, n / 2)
}

//方法三：暴力循环
var myPow = function (x, n) {
  var result = 1
  if (n < 0) {
    n = -n
    x = 1 / x
  }

  while (n--) {
    result = result * x
  }
  return result
}

console.log(myPow(2, 5))

/* 
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
 

提示：

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/powx-n
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
