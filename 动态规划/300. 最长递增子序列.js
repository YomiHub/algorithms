// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 记录0~n-1个位置的最长子序，取max
// dp状态是包含[index]在内，从0到index的最长子序的个数，初始值默认为1即本身 O(n^2)
var lengthOfLIS = function (nums) {
  if (nums == null || nums.length == 0) return 0

  let res = 1 //默认第一位是最长
  let dp = new Array(nums.length).fill(1) //默认为1，即本身
  for (let i = 1; i < nums.length; ++i) {
    // 从头到j的每个位置最长子序
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1) //满足的条件下：当前子序 = max(前一个子序+1,当前最大子序)
      }
      //不满足的情况下，dp[i]只要自己，保持1
    }
    res = Math.max(res, dp[i]) //在所有位置中找最长
  }
  return res
}

// 维护一个最长序列的数组，每次新增元素大于有序区的最大值则push，小于最大值则替换掉最大值
var lengthOfLIS = function (nums) {
  if (nums == null || nums.length == 0) return 0
  let LISArr = [nums[0]] //存放序列
  for (let i = 1; i < nums.length; ++i) {
    //二分查找到有序区，找到最小比nums[i]大的一个数
    let index = binarySearch(LISArr, nums[i], 0, LISArr.length - 1);
    
    if (index==-1&&LISArr[LISArr.length - 1]!=nums[i]) {
      //如果没有比它大的数，且有序区最大值不等于nums[i]则push（严格递增）
      LISArr.push(nums[i])
    } else if(LISArr[index-1]!=nums[i]){
      LISArr[index] = nums[i]
    }
  }
  return LISArr.length
}

//瞎写的一个二分查找，冇眼睇
function binarySearch(arr, target, start, end) {
  //严格递增的arr中找最小比target大的数，不兼容有相等元素的情况
  if (arr.length == 0) return 0;
  if (arr.length == 1 && arr[0] > target) return 0
  let mid = Math.floor((start + end) / 2);
  if (start > end) {
    return -1;
  }

  //要兼容mid为0的情况
  if (arr[mid] > target && (arr[mid -1] <= target||mid-1<0)) {
    return mid;
  }else if (arr[mid] > target) {
    return binarySearch(arr,target,start,mid-1);
  } else {
    return binarySearch(arr,target,mid+1,end);
  }
}

/* 
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
