// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回滑动窗口中的最大值。
// tips：可构建size为k的大顶堆

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  //注意边界条件
  if (k === 0 || !nums.length) {
    return []
  }

  let left = 0
  let right = k - 1
  let lastMax = findArrMax(nums, left, right)
  let res = [lastMax]

  while (right < nums.length - 1) {
    let nextMax
    // res.push(findArrMax(nums,++left,++right));  //每一次都在窗口查找最大值

    // 窗口左边界最大时，重新查找最大值
    if (nums[left] == lastMax) {
      nextMax = findArrMax(nums, ++left, ++right)
      lastMax = nextMax
    } else {
      // 对比上一次取的最大值与最新右边界的大小
      nextMax = Math.max(lastMax, nums[right + 1])
      lastMax = nextMax
      ++left
      ++right
    }
    res.push(nextMax)
  }

  return res
}

function findArrMax(arr, left, right) {
  let max = -Infinity
  for (let i = left; i <= right; ++i) {
    max = Math.max(max, arr[i])
  }
  return max
}

// 推荐：单调队列：同时弹出队首和队尾的元素的双端队列，队列中，这些下标按照从小到大的顺序被存储，并且它们在数组 nums 中对应的值是严格单调递减的

// 当滑动窗口向右移动时，我们需要把一个新的元素放入队列中。为了保持队列的性质，我们会不断地将新的元素与队尾的元素相比较，如果新元素大于等于后者，那么队尾的元素就可以被永久地移除
//作者：LeetCode-Solution
var maxSlidingWindow = function (nums, k) {
  const n = nums.length
  const q = []

  const ans = [] //前K个数中找到的最大值
  for (let i = 0; i < n; i++) {
    if (i >= k) {
      //队列满K个数的时候，将前面的数值从队列剔除
      while (q[0] <= i - k) {
        q.shift()
      }
    }
    //新的值更大，清除队列的数，维护第K大的队列
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop()
    }
    q.push(i)

    if (i >= k - 1) {
      ans.push(nums[q[0]])
    }
  }
  return ans
}

/* 示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sliding-window-maximum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
