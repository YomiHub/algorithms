// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
/**
 * @param {number[]} nums
 * @return {number}
 */
//【DP 数组记录打第i家最大收益】 dp[i] = Math.max(dp[i-3]+nums[i],dp[i-2]+nums[i]) 时间复杂度O(n)
var rob = function (nums) {
  let len = nums.length
  if (len == 1) return nums[0]
  if (len == 2) return Math.max(nums[0], nums[1])
  let profit = [nums[0], nums[1], nums[0] + nums[2]] //打家第i个的最大收益
  let res = Math.max(nums[1], nums[0] + nums[2])

  for (let i = 3; i < len; ++i) {
    //可以相隔一家偷窃或者相隔两家（相隔3个肯定是损失一家）
    let value = Math.max(profit[i - 3] + nums[i], profit[i - 2] + nums[i])
    profit[i] = value
    res = Math.max(value, res)
  }
  return res
}


// 对每一家都有偷和不偷的选择 dp[i]=max(dp[i−2]+nums[i],dp[i−1])
// 偷，则是【index+2】+【index】
// 不偷就是【index-1】的最高金额
var rob = function(nums){
  let len = nums.length;
  if(len == 1) return nums[0];

  let dp = new Array(len).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0],nums[1]);

  for(let i = 2; i<len; ++i){
    dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1]);
  }
  return dp[len-1];
}


console.log(rob([2, 7, 9, 3, 1]))
/* 
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 400

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
