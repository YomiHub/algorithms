// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 1、递归法实现子集枚举
// 考虑每个 nums[i] 是选还是不选，由此组合出 2^n 个不同的子集
var subsets = function (nums) {
  const t = []
  const ans = []
  const dfs = (cur) => {
    // 子集构造完毕
    if (cur === nums.length) {
      ans.push(t.slice()) // 复制
      return
    }

    dfs(cur + 1) // 不选 nums[cur]

    t.push(nums[cur]) // 选 nums[cur]
    dfs(cur + 1)
    t.pop() // 恢复现场
  }
  dfs(0)
  return ans
}

// 2、迭代法实现子集枚举
// 用 1 表示「在子集中」，0 表示不在子集中，那么每一个子集可以对应一个长度为 n 的 0/1 序列
// 000	{}	0
// 001	{9}	1
// 010	{2}	2
// 011	{2,9}	3

// 发现 0/1 序列对应的二进制数正好从 0 到 2^n − 1
var subsets = function (nums) {
  const result = []
  const n = nums.length
  // 1<<n 表示向左位移n位，即 2^n
  for (let i = 0; i < 1 << n; ++i) {
    const group = []
    // i 的二进制结果对应描述相应位置的数字是否存在
    for (let j = 0; j < n; ++j) {
      // 第 j 位的二进制进行与操作，结果为0说明第j不存在
      if (i & (1 << j)) {
        group.push(nums[j])
      }
    }
    result.push(group)
  }
  return result
}

/*
示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同 
*/
