// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划：
//使用变量保存每一次乘积中的最大最小值
//（看完这个别人的代码后，格局打开，自己下面写的都是啥玩意）
var maxProduct = function (nums) {
  let len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]

  let res = nums[0]
  let prevMax = nums[0]
  let prevMin = nums[0]

  for (let i = 1; i < len; ++i) {
    let num = nums[i]
    let max = Math.max(prevMax * num, prevMin * num, num)
    let min = Math.min(prevMax * num, prevMin * num, num)
    prevMax = max
    prevMin = min
    res = prevMax > res ? prevMax : res
  }
  return res
}

// DP 动态规划
// 因为向后乘可能会出现负数的情况，要用二维来存储当前乘积最大（正数）、最小（负数）的情况（或者定义两个一维的数组）
var maxProduct = function (nums) {
  let len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]

  //只需要保存前一个状态的最大最小，所以只需要二维的数组
  let dp = new Array(2).fill(0).map(() => {
    return [0, 0]
  })

  dp[0][0] = nums[0] //最大
  dp[0][1] = nums[0] //最小

  let res = nums[0] //要求的最终值

  for (let i = 1; i < len; ++i) {
    let x = i % 2
    let y = (i - 1) % 2 //0,1、1,0  :  x表示当前，y表示上一次
    dp[x][0] = Math.max(dp[y][0] * nums[i], dp[y][1] * nums[i], nums[i]) //和最大乘、最小乘、不乘
    dp[x][1] = Math.min(dp[y][0] * nums[i], dp[y][1] * nums[i], nums[i])
    res = Math.max(res, dp[x][0])
  }
  return res
}

// DFS暴力：不愧是我，依旧以超时的结果拿下：182 / 187 个通过测试用例
var maxProduct = function (nums) {
  let len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]
  let max = nums[0]

  let dfs = (i, product) => {
    if (i > len - 1) {
      return
    }
    max = Math.max(max, product)

    console.log(product)
    dfs(i + 1, product * nums[i + 1])
    dfs(i + 1, nums[i + 1])
  }

  dfs(0, nums[0])
  return max
}

console.log(maxProduct([-4, -3]))

/* 
示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-product-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
