// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//前缀和 + 哈希表优化: 时间复杂度：O(n)
var subarraySum = function (nums, k) {
  let res = 0;
  let map = new Map(),prev=0;
  map.set(0,1);  //前0项和为0的有1项
  for(let num of nums){
    prev +=num;
    //记录符合条件的前N项和
    if(map.has(prev-k)){
      res += map.get(prev-k)
    }
    if(map.has(prev)){
      //已存在的前n项和
      map.set(prev,map.get(prev)+1)
    }else{
      map.set(prev,1);
    }
  }
  return res;
}

//超时做法:时间复杂度：O(n^2)
var subarraySum = function (nums, k) {
  let res = 0
  let len = nums.length
  if (!len) {
    return 0
  }

  for (let i = 0; i < len; ++i) {
    //左边界i取值为0~len-1
    let total = 0
    for (let j = i; j < len; ++j) {
      //右边界为i+1~len-1
      total += nums[j]
      if (total == k) {
        res++ //可能出现负值，所以取得一次仍然要向后遍历
      }
    }
  }
  return res
}

let nums = [1, 1, 1], k = 2;
console.log(subarraySum(nums, k))
/* 
示例 2：
输入：nums = [1,2,3], k = 3
输出：2


提示：
1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subarray-sum-equals-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
