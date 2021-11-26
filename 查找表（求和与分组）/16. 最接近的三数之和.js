// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function (nums, target) {
  let len = nums.length;

  nums.sort(function(a,b){return a-b;}); //从小到大排序，以方便计算left右移还是right左移

  let res = nums[0]+nums[1]+nums[2];
  let absVal = Math.abs(res-target);
  for (let i = 0; i < len - 2; ++i) {
    let left = i + 1
    let right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let nowAbs = Math.abs(sum-target);
      // console.log(sum,i,left,right,nowAbs)
      if(nowAbs<absVal){
        absVal = nowAbs;
        res = sum;
      }

      if(sum<target){
        ++left;
      }else if(sum>target){
        --right;
      }else{
        return sum;//值相等时，差值最小
      }
    }
  }
  return res;
}

console.log(threeSumClosest([-3,-2,-5,3,-4],-1))

/* 示例 1：
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。


示例 2：
输入：nums = [0,0,0], target = 1
输出：0
 

提示：
3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
