// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回滑动窗口中的最大值。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  //注意边界条件
  if(k===0||!nums.length){
    return [];
  }

  let left = 0;
  let right = k-1;
  let lastMax = findArrMax(nums,left,right);
  let res = [lastMax];

  while(right < nums.length-1){
    let nextMax;
    // res.push(findArrMax(nums,++left,++right));  //每一次都在窗口查找最大值
    
    // 窗口左边界最大时，重新查找最大值
    if(nums[left]==lastMax){
      nextMax = findArrMax(nums,++left,++right)
      lastMax = nextMax;
    }else{
      // 对比上一次取的最大值与最新右边界的大小
      nextMax = Math.max(lastMax,nums[right+1]);
      lastMax = nextMax;
      ++left;
      ++right;
    }
    res.push(nextMax);
  }

  return res;
};

function findArrMax(arr,left,right){
  let max = -Infinity;
  for(let i = left; i<=right; ++i){
    max = Math.max(max,arr[i]);
  }
  return max;
}

/* 示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sliding-window-maximum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */