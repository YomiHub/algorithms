//-----------------------------------------------------------------
// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1

// 给你 n ，请计算 F(n)

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  var obj = {}
  return fibCal(n, obj)
}

function fibCal(n, obj) {
  var result

  if (obj.hasOwnProperty(n)) {
    //记忆化
    return obj[n]
  }

  if (n < 2) {
    result = n
  } else {
    result = fibCal(n - 1, obj) + fibCal(n - 2, obj)
  }

  obj[n] = result
  return result
}

//未优化的解法
var fib = function (n) {
  if(n==0) return 0;
  if(n==1) return 1;
  return fib(n-1)+fib(n-2); //递归进行了大量重复计算，指数级增加
}

//已经知道递推公式可以直接正向求解
var fib = function(n){
  let arr = new Array(n);
  arr[0] = 0;
  arr[1] = 1;

  for(let i = 2; i<=n; ++i){
    arr[i] = arr[i-1]+arr[i-2];
  }
  return arr[n];
}


//最优解法：矩阵相乘,乘以一个常数矩阵
//| fn  | = |1 1| |fn-1|
//| fn-1| = |1 0| |fn-2|

//化简之后就是n-1个常数矩阵相乘，最后乘以1；即 y = x^k


/* 示例 1：
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：

输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：

提示：
0 <= n <= 30

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fibonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
