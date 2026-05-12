// 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
// 给你一个整数数组 nums ，找出 nums 的下一个排列。

// 必须 原地 修改，只允许使用额外常数空间。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 1、从后向前 查找第一个 相邻升序 的元素对 (i,j)，满足 A[i] < A[j]。此时 [j,end) 必然是降序
// 2、在 [j,end) 从后向前 查找第一个满足 A[i] < A[k] 的 k。A[i]、A[k] 分别就是上文所说的「小数」、「大数」
// 3、将 A[i] 与 A[k] 交换
// 4、可以断定这时 [j,end) 必然是降序，逆置 [j,end)，使其升序
// 5、如果在步骤 1 找不到符合的相邻元素对，说明当前 [begin,end) 为一个降序顺序，则直接跳到步骤 4

var nextPermutation = function (nums) {
  const len = nums.length
  if (len <= 1) {
    return
  }

  let i = len - 2,
    j = len - 1,
    k = len - 1
  // 寻找相邻升序
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }

  // 不是最后一个数
  if (i >= 0) {
    // find: A[i]<A[k]
    while (nums[i] >= nums[k]) {
      --k
    }
    // 交换
    let temp = nums[i]
    nums[i] = nums[k]
    nums[k] = temp
  }

  for (
    let prev = j, cur = len - 1;
    prev < cur;
    prev = prev + 1, cur = cur - 1
  ) {
    let temp = nums[prev]
    nums[prev] = nums[cur]
    nums[cur] = temp
  }
}

/* 
示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 100 
*/
