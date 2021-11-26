//-----------------------------------------------------------------
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
var climbStairs = function (n) {
  var obj = {}
  return climbCal(n, obj)
}

function climbCal(n, obj) {
  var result
  if (obj.hasOwnProperty(n)) {
    return obj[n]
  }

  if (n == 1) {
    result = 1
  } else if (n == 2) {
    result = 2
  } else {
    // 最后一步有两种：爬1个阶梯或两个；
    // 到达这两个倒数第二步的方法个数和，即为到达最后一步的方法个数
    result = climbCal(n - 1, obj) + climbCal(n - 2, obj) //斐波那契
  }

  obj[n] = result
  return result
}

console.log(climbStairs(5))

/* 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
