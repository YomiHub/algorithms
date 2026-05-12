// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 1、递归回溯：递归的终止条件为 target≤0 或者 candidates 数组被全部用完
var combinationSum = function (candidates, target) {
  const result = []

  // 还剩 target 要组合，已经组合的列表为 combine
  const dfs = (target, combine, index) => {
    if (index === candidates.length) {
      return
    }

    if (target === 0) {
      result.push(combine)
      return
    }

    dfs(target, combine, index + 1) // 不选择当前数字

    if (target - candidates[index] >= 0) {
      // 当前值可以重复选择，下标不加一
      dfs(target - candidates[index], [...combine, candidates[index]], index)
    }
  }

  dfs(target, [], 0)
  return result
}

/* 
示例 1：
输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。

示例 2：
输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]

示例 3：
输入: candidates = [2], target = 1
输出: []
 

提示：

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
candidates 的所有元素 互不相同
1 <= target <= 40 */
