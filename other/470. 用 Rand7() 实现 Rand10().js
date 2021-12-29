// 用 Rand7() 实现 Rand10()
// 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。

// 不要使用系统的 Math.random() 方法

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */

// 公式解法1：
// 假设 randN() 能等概率地生成 [1,N] 范围内的随机数，则 (randX()-1)*Y+randY() 能等概率地生成 [1, X*Y] 范围内的随机数。通过 (rand7()-1)*7+rand7() 生成 [1,49] 的随机数；

// 假设 randX() 能生成 [1,X] 范围内的随机数，则 randX%Y+1 能生成 [1, Y] 范围内的随机数，当 X = nY 时（也就是 X 是 Y 的整数倍）成立。

// 如果能生成 [1,50] 之间的随机数 num，则我们使用 num%10+1 就可以生成 [1,10] 之间的随机数，也就是 rand10()。但只能生成 [1,49] 的随机数，这种情况下可以使用拒绝采样，也就是某个数字不符合条件就丢弃它，在这个问题中只有 num 在 [1,40] 之间时，我们才生成 num%10+1 作为 [1,10] 之间的随机数。如果 num 不在 [1,40] 之间，我们继续生成 num，直到 num 在 [1,40] 之间。具体如下：
var rand10 = function () {
  let i
  do {
    i = 7 * (rand7() - 1) + rand7() //产生[1,49]的整数区间
  } while (i > 40) //将[1,49]整数区间控制于[1,40]
  return (i % 10) + 1 //将[1,40]映射到[1,10]
}

// 在思路 1 中，我们生成了 [1, 49] 的随机数，但只使用了 [1, 40] 的随机数。将[41, 49] 之间的数减去 40 可以得到 [1, 9] 之间的随机数，也就是 rand9()，通过 rand9() 和 rand7()，我们可以得到 rand63()，然后再对 [1, 63] 拒绝采样。
var rand10 = function () {
  while (true) {
    let num = (rand7() - 1) * 7 + rand7()
    if (num <= 40) return (num % 10) + 1

    let a = num - 40 // rand9()
    num = (a - 1) * 7 + rand7() // rand63()
    if (num <= 60) return (num % 10) + 1

    a = num - 60 // rand3()
    num = (a - 1) * 7 + rand7() // rand21()
    if (num <= 20) return (num % 10) + 1
  }
}

/* 
示例 3:

输入: 3
输出: [8,1,10]

1、rand7 已定义。
2、传入参数: n 表示 rand10 的调用次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-rand10-using-rand7
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
