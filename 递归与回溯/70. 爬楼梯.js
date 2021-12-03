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
    // 最后一步有两种：爬1个阶梯或两个（回溯：从终点往前看）
    // 到达这两个倒数第二步的方法个数和，即为到达最后一步的方法个数
    result = climbCal(n - 1, obj) + climbCal(n - 2, obj) //斐波那契
  }

  obj[n] = result
  return result
}

//DP 动态规划
var climbStairs = function (n) {
  if(n == 0 || n==1 ||n==2) return n;  // n<=2
  let arr = new Array(n);
  arr[0] = 0; arr[1] = 1;  //也可以只用三个变量，前两个的值和总值
  for(let i = 2; i<n; ++i){
    arr[i] = arr[i-1]+arr[i-2];
  } 
  return arr[n-1];
}

console.log(climbStairs(5))

/* 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
